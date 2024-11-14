import "server-only";
import { Client } from "@notionhq/client";
import { cache } from "react";
import {
  BlockObjectResponse,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { NotionToMarkdown } from "notion-to-md";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeHighlight from "rehype-highlight";
import rehypeSanitize from "rehype-sanitize";
import rehypeRaw from "rehype-raw";
import remarkFrontmatter from "remark-frontmatter";
import remarkParseFrontmatter from "remark-parse-frontmatter";

import { unified } from "unified";

export const REVALIDATE_TIME = 3600;

export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const n2m = new NotionToMarkdown({
  notionClient: notion,
  config: {
    parseChildPages: false,
  },
});

export const fetchPages = cache(async () => {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
    filter: {
      property: "Status",
      status: {
        equals: "Published",
      },
    },
  });
  return response;
});

export const fetchBySlug = cache(async (slug: string) => {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
    filter: {
      property: "Slug",
      rich_text: { equals: slug },
    },
  });
  return response.results[0] as PageObjectResponse | undefined;
});

export const fetchPageBlocks = cache(async (pageId: string) => {
  const res = await notion.blocks.children.list({
    block_id: pageId,
  });
  return res.results as BlockObjectResponse[];
});

export async function getMarkdownFromBlocks(blocks: BlockObjectResponse[]) {
  const mdblocks = await n2m.blocksToMarkdown(blocks);
  const mdString = n2m.toMarkdownString(mdblocks);

  const markdownContent =
    typeof mdString === "string" ? mdString : mdString.parent;

  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkFrontmatter, ["yaml"])
    .use(remarkParseFrontmatter)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(markdownContent);

  return String(processedContent);
}
