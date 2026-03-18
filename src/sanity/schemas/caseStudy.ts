import { defineArrayMember, defineField, defineType } from "sanity";

export const caseStudy = defineType({
  name: "caseStudy",
  title: "Case Study",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "slug", type: "slug", options: { source: "title", maxLength: 96 } }),
    defineField({ name: "company", type: "string" }),
    defineField({ name: "companyLogo", type: "image", options: { hotspot: true } }),
    defineField({
      name: "category",
      type: "string",
      options: {
        list: ["User Adoption", "Discoverability", "Developer Experience", "Conversion"],
      },
    }),
    defineField({ name: "tags", type: "array", of: [defineArrayMember({ type: "string" })] }),
    defineField({ name: "challenge", type: "text" }),
    defineField({ name: "approach", type: "text" }),
    defineField({ name: "action", type: "text" }),
    defineField({ name: "results", type: "text" }),
    defineField({ name: "keyLearning", type: "text" }),
    defineField({
      name: "metrics",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "label", type: "string" }),
            defineField({ name: "value", type: "string" }),
            defineField({ name: "description", type: "string" }),
          ],
        }),
      ],
    }),
    defineField({
      name: "testimonial",
      type: "object",
      fields: [
        defineField({ name: "quote", type: "text" }),
        defineField({ name: "author", type: "string" }),
        defineField({ name: "role", type: "string" }),
        defineField({ name: "image", type: "image", options: { hotspot: true } }),
      ],
    }),
    defineField({ name: "howIDidIt", type: "array", of: [defineArrayMember({ type: "string" })] }),
    defineField({
      name: "body",
      type: "array",
      of: [defineArrayMember({ type: "block" }), defineArrayMember({ type: "image" }), defineArrayMember({ type: "code" })],
    }),
    defineField({ name: "order", type: "number" }),
  ],
});
