import "server-only";
import { Client } from "@notionhq/client";
import React from "react";
import {
  BlockObjectResponse,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { NotionToMarkdown } from "notion-to-md";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import { unified } from "unified";

export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const n2m = new NotionToMarkdown({
  notionClient: notion,
  config: {
    parseChildPages: false,
  },
});

export const fetchPages = React.cache(() => {
  return notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
    filter: {
      property: "Status",
      status: {
        equals: "Published",
      },
    },
  });
});

export const fetchBySlug = React.cache(async (slug: string) => {
  return notion.databases
    .query({
      database_id: process.env.NOTION_DATABASE_ID!,
      filter: {
        property: "Slug",
        rich_text: { equals: slug },
      },
    })
    .then((res) => res.results[0] as PageObjectResponse | undefined);
});

export const fetchPageBlocks = React.cache(async (pageId: string) => {
  const res = await notion.blocks.children.list({
    block_id: pageId,
  });
  return res.results as BlockObjectResponse[];
});

export async function getMarkdownFromBlocks(blocks: BlockObjectResponse[]) {
  // Convert blocks to markdown
  const mdblocks = await n2m.blocksToMarkdown(blocks);
  const mdString = n2m.toMarkdownString(mdblocks);

  // Make sure we're accessing the markdown string correctly
  const markdownContent =
    typeof mdString === "string" ? mdString : mdString.parent;

  // Convert markdown to HTML
  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeStringify)
    .process(markdownContent);

  return processedContent.toString();
}