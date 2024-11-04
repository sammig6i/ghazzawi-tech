import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Posts")
        .child(S.documentList().title("Posts").filter('_type == "post"')),
      S.listItem()
        .title("Authors")
        .child(S.documentList().title("Authors").filter('_type == "author"')),
      S.listItem()
        .title("Categories")
        .child(
          S.documentList().title("Categories").filter('_type == "category"')
        ),
    ]);
