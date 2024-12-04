import { defineField, defineType } from "sanity";

export default defineType({
  name: "play",
  title: "Play",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "视频产品标题",
      type: "string",
    }),
    defineField({
      name: "buttonText",
      title: "按钮文本",
      type: "string",
    }),
    defineField({
      name: "video",
      title: "视频文件(mp4)",
      type: "file",
    }),
    defineField({
      name: "product",
      title: "关联产品",
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
      initialValue: true,
    }),
  ],
});
