import { defineField, defineType } from "sanity";
import { Ruler } from "lucide-react";
export default defineType({
  name: "size",
  title: "尺寸",
  type: "document",
  icon: Ruler,
  fields: [
    defineField({
      name: "name",
      title: "尺寸名称",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "描述",
      type: "string",
    }),
    defineField({
      name: "sizeValue",
      title: "尺寸值",
      type: "object",
      fields: [
        defineField({
          name: "unit",
          title: "单位",
          type: "string",
          options: {
            list: ["cm", "mm", "inch"],
          },
        }),
        defineField({
          name: "width",
          title: "宽度",
          type: "number",
        }),
        defineField({
          name: "height",
          title: "高度",
          type: "number",
        }),
      ],
    }),
  ],
});
