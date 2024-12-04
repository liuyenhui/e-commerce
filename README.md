This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
Open [http://localhost:3000/admin](http://localhost:3000/admin) with your browser sanity studio.

## typegen

```bash
yarn typegen
```

### package.json

```json
"predev": "yarn typegen",

"typegen": "sanity schema extract --path=./src/sanity/extract.json && sanity typegen generate"
```

## 进度日志

- 2024-11-19 完成商品设置、分类、品牌设置

- 2024-11-20 首页内容、商品详情 -- 待完成

- 2024-11-21 完成商品分类、品牌列表

- 2024-11-22 完成注册、登录

- 2024-11-23 完成购物车
- 2024-11-24 完成订单
- 2024-11-25 完成支付

- 2024-11-26 完成评价

- 2024-11-27 完成售后

- 2024-11-28 完成用户中心

- 2024-11-29 完成营销中心

- 2024-11-30 完成数据分析

## 待解决问题

- 1. 商品详情页面的图片轮播
- 2. 商品详情页面的规格选择
- 3. Web部署,数据同步
- 4. 用户信息安全,订单信息安全
- 5. SEO 优化,AI Blog 生成
- 6. 移动端适配
