import { defineArrayMember, defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "siteTitle", type: "string" }),
    defineField({ name: "siteDescription", type: "text" }),
    defineField({ name: "heroTagline", type: "string" }),
    defineField({ name: "heroDescription", type: "text" }),
    defineField({
      name: "ctaPrimary",
      type: "object",
      fields: [defineField({ name: "label", type: "string" }), defineField({ name: "url", type: "string" })],
    }),
    defineField({
      name: "ctaSecondary",
      type: "object",
      fields: [defineField({ name: "label", type: "string" }), defineField({ name: "url", type: "string" })],
    }),
    defineField({
      name: "socialLinks",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [defineField({ name: "platform", type: "string" }), defineField({ name: "url", type: "url" })],
        }),
      ],
    }),
  ],
});
