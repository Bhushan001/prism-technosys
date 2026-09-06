import { defineField, defineType } from "sanity";

export const page = defineType({
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    defineField({
      name: "slug",
      title: "Page",
      type: "string",
      options: {
        list: [
          { title: "Home", value: "home" },
          { title: "About", value: "about" },
          { title: "Products", value: "products" },
          { title: "Capabilities", value: "capabilities" },
        ],
      },
      validation: (r) => r.required(),
    }),
    defineField({ name: "eyebrow", title: "Eyebrow Label", type: "string" }),
    defineField({ name: "heroTitle", title: "Hero Title", type: "string" }),
    defineField({ name: "heroSubtitle", title: "Hero Subtitle", type: "text", rows: 2 }),
    defineField({
      name: "heroSlides",
      title: "Hero Slides",
      description: "Only used on the Home page carousel.",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "copy", title: "Copy", type: "text", rows: 2 }),
            defineField({ name: "image", title: "Image", type: "image" }),
          ],
        },
      ],
    }),
    defineField({ name: "body", title: "Body", type: "array", of: [{ type: "block" }] }),
  ],
  preview: {
    select: { title: "slug" },
  },
});
