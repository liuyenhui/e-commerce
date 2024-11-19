import { defineField, defineType } from "sanity";
import { PrinterIcon, Wrench, DollarSignIcon, ShoppingBag } from "lucide-react";
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
          type: "image",
          name: "image",
          title: "商品图片",
          options: {
            hotspot: true,
            metadata: ["palette", "exif"],
          },
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
  ],
  // 预览
  preview: {
    select: {
      title: "name",
      media: "images.0.asset",
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
