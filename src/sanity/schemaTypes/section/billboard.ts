import { defineType, defineField } from "sanity";
const groups = [
  { name: "left", title: "左侧" },
  { name: "right", title: "右侧" },
];
export default defineType({
  name: "billboard",
  title: "宣传板页设置",
  type: "document",
  groups: groups,
  fields: [
    defineField({
      name: "leftTitle",
      type: "string",
      title: "左侧标题",
      group: "left",
    }),
    defineField({
      name: "leftDescription",
      type: "string",
      title: "左侧描述",
      group: "left",
    }),
    defineField({
      name: "leftButtonText",
      type: "string",
      title: "左侧按钮文字",
      group: "left",
    }),
    defineField({
      name: "leftImage",
      type: "image",
      title: "左侧AD图片",
      options: {
        hotspot: true,
      },
      group: "left",
    }),
    defineField({
      name: "leftType",
      title: "左侧展示类型",
      type: "string",
      initialValue: "tags",
      options: {
        list: [
          { title: "标签", value: "tags" },
          { title: "分类", value: "categories" },
        ],
      },
      group: "left",
    }),
    defineField({
      name: "leftTags",
      title: "选择标签",
      type: "reference",
      to: [{ type: "tag" }],
      hidden: ({ parent }) => parent.leftType !== "tags",
      group: "left",
    }),
    defineField({
      name: "leftCategories",
      title: "选择分类",
      type: "reference",
      to: [{ type: "class" }],
      hidden: ({ parent }) => parent.leftType !== "categories",
      group: "left",
    }),
    defineField({
      name: "rightTitle",
      type: "string",
      title: "右侧标题",
      group: "right",
    }),
    defineField({
      name: "rightDescription",
      type: "string",
      title: "右侧描述",
      group: "right",
    }),
    defineField({
      name: "rightButtonText",
      type: "string",
      title: "右侧按钮文字",
      group: "right",
    }),
    defineField({
      name: "rightImage",
      type: "image",
      title: "右侧AD图片",
      options: {
        hotspot: true,
      },
      group: "right",
    }),
    defineField({
      name: "rightType",
      title: "右侧展示类型",
      type: "string",
      initialValue: "categories",
      options: {
        list: [
          { title: "标签", value: "tags" },
          { title: "分类", value: "categories" },
        ],
      },
      group: "right",
    }),
    defineField({
      name: "rightTags",
      title: "选择标签",
      type: "reference",
      to: [{ type: "tag" }],
      hidden: ({ parent }) => parent.rightType !== "tags",
      group: "right",
    }),
    defineField({
      name: "rightCategories",
      title: "选择分类",
      type: "reference",
      to: [{ type: "class" }],
      hidden: ({ parent }) => parent.rightType !== "categories",
      group: "right",
    }),
  ],
});
