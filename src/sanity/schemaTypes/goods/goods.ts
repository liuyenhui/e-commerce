import { defineField, defineType } from "sanity";
import {
  PrinterIcon,
  Wrench,
  DollarSignIcon,
  ShoppingBag,
  Box,
} from "lucide-react";
import { uuid } from "@sanity/uuid";
const GROUPS = [
  {
    name: "all-fields",
    title: "全部字段",
    hidden: true,
  },
  {
    name: "base",
    title: "基础信息",
    icon: PrinterIcon,
    isDefault: true,
  },
  {
    name: "parameters",
    title: "参数",
    icon: Wrench,
  },
  {
    name: "prices",
    title: "价格体系",
    icon: DollarSignIcon,
  },
  {
    name: "specifications",
    title: "规格",
    icon: Box,
  },
];
export default defineType({
  name: "goods",
  title: "全部商品",
  type: "document",
  icon: ShoppingBag,
  groups: GROUPS,
  // 字段
  fields: [
    defineField({
      name: "name",
      title: "商品名称",
      type: "string",
      group: "base",
    }),
    defineField({
      name: "slug",
      title: "商品子路径",
      type: "slug",
      description: "商品子路径唯一",
      group: "base",
      options: {
        source: "name",
      },
    }),
    defineField({
      name: "sku",
      title: "商品SKU",
      type: "string",
      description: "商品SKU为商品的唯一标识",
      initialValue: uuid(),
      group: "base",
    }),
    defineField({
      name: "description",
      title: "商品描述",
      type: "string",
      group: "base",
    }),

    defineField({
      name: "images",
      title: "商品图片",
      description: "提示：首图将作为商品默认图片",
      type: "array",
      group: "base",
      options: {
        layout: "grid",
      },
      of: [
        defineField({
          type: "object",
          name: "images",
          title: "商品图片",
          preview: {
            select: {
              title: "image",
              color: "color",
              image: "image.asset",
            },
            prepare({ image }) {
              return {
                title: "商品图片",
                media: image,
              };
            },
          },
          fields: [
            {
              type: "image",
              name: "image",
              title: "商品图片",
              options: {
                hotspot: true,
                // metadata: ["palette", "exif"],
              },
            },
            {
              type: "reference",
              name: "color",
              title: "颜色",
              to: [{ type: "colorValue" }],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: "introduction",
      title: "商品介绍",
      type: "array",
      group: "base",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "isOnSale",
      title: "是否上架",
      type: "boolean",
      group: "base",
    }),
    defineField({
      name: "class",
      title: "分类",
      type: "reference",
      to: [{ type: "class" }],
      group: "parameters",
    }),
    defineField({
      name: "brand",
      title: "品牌",
      type: "reference",
      to: [{ type: "brand" }],
      group: "parameters",
    }),
    defineField({
      name: "tags",
      title: "标签",
      type: "array",
      group: "parameters",
      of: [{ type: "reference", to: [{ type: "tag" }] }],
    }),

    defineField({
      name: "origin",
      title: "产地",
      type: "string",
      group: "parameters",
      options: {
        list: [
          "中国",
          "日本",
          "韩国",
          "美国",
          "英国",
          "法国",
          "德国",
          "意大利",
          "西班牙",
          "其他",
        ],
      },
      initialValue: "中国",
    }),
    defineField({
      name: "retailPrice",
      title: "零售价",
      description: "零售价为商品的默认价格",
      type: "number",
      group: "prices",
    }),
    defineField({
      name: "memberPrice",
      title: "会员价",
      type: "number",
      group: "prices",
    }),
    defineField({
      name: "wholesalePrice",
      title: "批发价",
      type: "number",
      group: "prices",
    }),
    defineField({
      name: "size",
      title: "尺寸",
      type: "array",
      of: [{ type: "reference", to: [{ type: "size" }] }],
      group: "specifications",
    }),
    defineField({
      name: "color",
      title: "颜色",
      type: "array",
      of: [{ type: "reference", to: [{ type: "colorValue" }] }],
      group: "specifications",
    }),
    defineField({
      name: "weight",
      title: "重量",
      type: "number",
      group: "specifications",
    }),
    defineField({
      name: "material",
      title: "材质",
      type: "string",
      group: "specifications",
    }),
    defineField({
      name: "packaging",
      title: "包装",
      type: "string",
      group: "specifications",
    }),
  ],
  // 预览
  preview: {
    select: {
      title: "name",
      media: "images.0.image.asset",
      description: "description",
      price: "retailPrice",
      className: "class.name",
      brandName: "brand.name",
    },
    prepare({ title, media, price, className, brandName }) {
      return {
        title,
        subtitle: `${className} | ${brandName} |  ¥${price}`,
        media,
      };
    },
  },
});
