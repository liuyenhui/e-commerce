import { defineType, defineField } from "sanity";

const objectFields = [
  defineField({
    name: "title",
    title: "Title",
    type: "string",
  }),
  defineField({
    name: "description",
    title: "Description",
    type: "string",
  }),
  defineField({
    name: "image",
    title: "Image",
    type: "image",
    options: {
      hotspot: true,
    },
  }),
  defineField({
    name: "buttonText",
    title: "Button Text",
    type: "string",
    initialValue: "Shop Now",
  }),

  defineField({
    name: "type",
    title: "Type",
    type: "string",
    options: {
      list: [
        { value: "tag", title: "Tag" },
        { value: "brand", title: "Brand" },
      ],
    },
    initialValue: "tag",
  }),
  defineField({
    name: "tag",
    title: "Tag",
    type: "reference",
    to: [{ type: "tag" }],
    hidden: ({ parent }) => parent?.type !== "tag",
  }),
  defineField({
    name: "brand",
    title: "Brand",
    type: "reference",
    to: [{ type: "brand" }],
    hidden: ({ parent }) => parent?.type !== "brand",
  }),
];

export default defineType({
  name: "featured",
  title: "Featured",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "first",
      title: "First",
      type: "object",
      fields: objectFields,
    }),
    defineField({
      name: "second",
      title: "Second",
      type: "object",
      fields: objectFields,
    }),
  ],
});
