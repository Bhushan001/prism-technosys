import type { StructureResolver } from "sanity/structure";

// Pins Site Settings as a singleton (one fixed document, no "create new")
// so editors can't accidentally create duplicate/conflicting settings docs.
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Site Settings")
        .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
      S.divider(),
      ...S.documentTypeListItems().filter((item) => item.getId() !== "siteSettings"),
    ]);
