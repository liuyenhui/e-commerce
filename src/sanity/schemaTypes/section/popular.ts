import { defineType, defineField } from "sanity";

export default defineType({
  name: "popular",
  title: "Popular",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
    }),
    defineField({
      name: "goods",
      type: "array",
      title: "goods",
      of: [
        {
          type: "reference",
          to: [{ type: "goods" }],
        },
      ],
    }),
  ],
});
