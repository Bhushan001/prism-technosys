import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  // Singleton: the Studio structure hides "create new" for this type and
  // always opens the one document with this fixed id (see structure.ts).
  fields: [
    defineField({ name: "companyName", title: "Company Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "establishedLine", title: "Established Line", type: "string", description: 'e.g. "EST. 1990 · PUNE"' }),
    defineField({ name: "phone", title: "Phone", type: "string" }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({ name: "addressLine1", title: "Address Line 1", type: "string" }),
    defineField({ name: "addressLine2", title: "Address Line 2", type: "string" }),
    defineField({ name: "hours", title: "Business Hours", type: "string" }),
    defineField({
      name: "certifications",
      title: "Certifications",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({ name: "footerBlurb", title: "Footer Blurb", type: "text", rows: 3 }),
    defineField({
      name: "stats",
      title: "Company Stats",
      description: "e.g. 34+ Years of Engineering Excellence",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "value", title: "Value", type: "string" }),
            defineField({ name: "label", title: "Label", type: "string" }),
          ],
        },
      ],
    }),
  ],
});
