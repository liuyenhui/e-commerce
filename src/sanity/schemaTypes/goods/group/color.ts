import { defineField, defineType } from "sanity";
import { Palette } from "lucide-react";
export default defineType({
  name: "colorValue",
  title: "颜色",
  type: "document",
  icon: Palette,
  fields: [
    defineField({
      name: "name",
      title: "颜色名称",
      type: "string",
    }),
    defineField({
      name: "color",
      title: "颜色",
      type: "color",
    }),
  ],
});
