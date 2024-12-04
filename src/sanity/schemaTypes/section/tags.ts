import { defineType, defineField } from "sanity";

export default defineType({
  name: "tags",
  title: "标签页设置",
  type: "document",
  fields: [
    defineField({
      name: "leftTitle",
      type: "string",
      title: "左侧标题",
    }),
    defineField({
      name: "leftDescription",
      type: "string",
      title: "左侧描述",
    }),
    defineField({
      name: "leftButtonText",
      type: "string",
      title: "左侧按钮文字",
    }),
    defineField({
      name: "leftImage",
      type: "image",
      title: "左侧AD图片",
    }),
    defineField({
      name: "leftButtonTag",
      type: "reference",
      title: "左侧展示标签",
      to: [{ type: "tag" }],
    }),
    defineField({
      name: "rightTitle",
      type: "string",
      title: "右侧标题",
    }),
    defineField({
      name: "rightDescription",
      type: "string",
      title: "右侧描述",
    }),
    defineField({
      name: "rightButtonText",
      type: "string",
      title: "右侧按钮文字",
    }),
    defineField({
      name: "rightImage",
      type: "image",
      title: "右侧AD图片",
    }),
    defineField({
      name: "rightButtonTag",
      type: "reference",
      title: "右侧展示标签",
      to: [{ type: "tag" }],
    }),
  ],
});
