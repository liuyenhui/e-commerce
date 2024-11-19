import { defineField, defineType } from "sanity";
import { Shapes } from "lucide-react";
export default defineType({
  name: "class",
  title: "商品分类",
  type: "document",
  icon: Shapes,
  fields: [
    defineField({
      name: "name",
      title: "分类名称",
      type: "string",
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
      name: "description",
      title: "分类描述",
      type: "text",
    }),
    defineField({
      name: "image",
      title: "分类图片",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
});
