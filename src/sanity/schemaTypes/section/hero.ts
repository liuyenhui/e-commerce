import { defineField, defineType } from "sanity";

export default defineType({
  name: "hero",
  title: "Hero",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Hero页标题",
      type: "string",
    }),
    defineField({
      name: "background",
      title: "Hero页图片",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "buttonText",
      title: "按钮文本",
      type: "string",
    }),
    defineField({
      name: "product",
      title: "关联商品",
      type: "reference",
      to: [{ type: "goods" }],
    }),
    defineField({
      name: "isShow",
      title: "是否显示",
      type: "boolean",
      options: {
        layout: "switch",
      },
    }),
  ],
});
