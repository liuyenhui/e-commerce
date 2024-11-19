import { defineField, defineType } from "sanity";
import { Tags } from "lucide-react";
export default defineType({
  name: "brand",
  title: "品牌",
  type: "document",
  icon: Tags,
  fields: [
    defineField({
      name: "name",
      title: "品牌名称",
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
      title: "品牌描述",
      type: "text",
    }),
    defineField({
      name: "logo",
      title: "品牌Logo",
      type: "image",
    }),
    defineField({
      name: "banner",
      title: "品牌Banner",
      type: "image",
    }),
    defineField({
      name: "website",
      title: "品牌官网",
      type: "url",
    }),
  ],
});
