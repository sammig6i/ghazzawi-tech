import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export interface BlogPost {
  title: string;
  subtitle: string;
  slug: string;
  mainImage: {
    url: string;
    alt: string;
  };
  publishedAt: string;
  body: any[];
  author: {
    name: string;
    image: {
      url: string;
    };
  };
  categories: {
    title: string;
  }[];
}

export interface Author {
  name: string;
  image: {
    url: string;
  };
}

export const DEFAULT_AUTHOR: Author = {
  name: "Sammi Ghazzawi",
  image: {
    url: "/about-photo.png",
  },
};

export async function formatBlogPosts(
  pages: PageObjectResponse[]
): Promise<BlogPost[]> {
  return pages.map((page) => {
    const properties = page.properties;
    const publishedDate = (
      page.properties.Published as { type: "date"; date: { start: string } }
    ).date.start;

    const formattedDate = new Date(
      publishedDate + "T00:00:00Z"
    ).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    });

    return {
      title: (properties.Title as any)?.title?.[0]?.plain_text || "",
      subtitle:
        (properties.Description as any)?.rich_text?.[0]?.plain_text || "",
      slug: (properties.Slug as any)?.rich_text?.[0]?.plain_text || "",
      mainImage: {
        url:
          (properties.Cover as any)?.files?.[0]?.file?.url ||
          (properties.Cover as any)?.files?.[0]?.external?.url ||
          "",
        alt: (properties.Title as any)?.title?.[0]?.plain_text || "",
      },
      publishedAt: formattedDate,
      body: [],
      author: (properties.Author as any)?.people?.[0]
        ? {
            name:
              (properties.Author as any).people[0].name || DEFAULT_AUTHOR.name,
            image: {
              url:
                (properties.Author as any).people[0].avatar_url ||
                DEFAULT_AUTHOR.image.url,
            },
          }
        : DEFAULT_AUTHOR,
      categories: ((properties.Tags as any)?.multi_select || []).map(
        (cat: any) => ({
          title: cat.name,
        })
      ),
    };
  });
}
