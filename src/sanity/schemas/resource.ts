import { defineArrayMember, defineField, defineType } from "sanity";

export const resource = defineType({
  name: "resource",
  title: "Resource",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "slug", type: "slug", options: { source: "title", maxLength: 96 } }),
    defineField({ name: "description", type: "text" }),
    defineField({
      name: "resourceType",
      type: "string",
      options: { list: ["Template", "Guide", "Tool", "Framework"] },
    }),
    defineField({ name: "link", type: "url" }),
    defineField({ name: "body", type: "array", of: [defineArrayMember({ type: "block" }), defineArrayMember({ type: "image" }), defineArrayMember({ type: "code" })] }),
    defineField({ name: "publishedAt", type: "datetime" }),
    defineField({ name: "tags", type: "array", of: [defineArrayMember({ type: "string" })] }),
    defineField({ name: "comingSoon", type: "boolean", initialValue: false }),
  ],
});
