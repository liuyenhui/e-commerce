import { defineField, defineType } from "sanity";

export default defineType({
  name: "header",
  title: "Header",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "店铺名称",
      type: "string",
    }),
    defineField({
      name: "logo",
      title: "店铺Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "subTitle",
      title: "副标题",
      type: "string",
    }),
    defineField({
      name: "background",
      title: "背景颜色",
      type: "color",
    }),
  ],
});
