import { defineField, defineType } from "sanity";

export default defineType({
  name: "tag",
  title: "标签",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "名称",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "描述",
      type: "text",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
      },
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
    }),
  ],
});
