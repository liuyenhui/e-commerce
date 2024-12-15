import { defineQuery } from "next-sanity";
import { client } from "@/sanity/lib/client";

const QUERY_HEADER = defineQuery(`*[_type == "header"][0]
    {_id,title,subTitle,"backgroundColor": background.rgb,"logo": logo.asset->url}`);

export async function getHeader() {
  return await client.fetch(
    QUERY_HEADER,
    {},
    { cache: "force-cache", next: { tags: ["header"] } }
  );
}

const QUERY_HERO = defineQuery(`*[_type == "hero" && _id == "hero"][0]{
  title,buttonText,
  "ref":product._ref,
  "background":background.asset->url,  
  isShow,
  product->{
    name,
    origin,
    description,
    "slug":slug.current,
    brand->{
       name,
       "logo":logo.asset->url
    }
  }
}`);

export async function getHero() {
  return await client.fetch(
    QUERY_HERO,
    {},
    { cache: "force-cache", next: { tags: ["hero"] } }
  );
}
const QUERY_PLAY = defineQuery(`*[_type == "play" ][0]{
  title,
  isShow,
  buttonText,
  "video":video.asset->url,
  product->{
    "slug":slug.current,
    name,
    description
  }
}`);

export async function getPlay() {
  return await client.fetch(
    QUERY_PLAY,
    {},
    { cache: "force-cache", next: { tags: ["play"] } }
  );
}
const QUERY_BILLBOARD = defineQuery(`*[_type == "billboard"][0]{
  "leftImage":leftImage.asset->url,
  "rightImage":rightImage.asset->url,
  leftTitle,
  rightTitle,
  leftDescription,
  rightDescription,
  leftButtonText,
  rightButtonText,
  leftTags->,
  rightTags->,
  leftCategories->,
  rightCategories->
    
}`);

export async function getBillboard() {
  return await client.fetch(
    QUERY_BILLBOARD,
    {},
    { cache: "force-cache", next: { tags: ["billboard"] } }
  );
}
const QUERY_POPULAR = defineQuery(`*[_type == "popular" && _id == "popular"][0]{
  title,
  sku,
  "goods":goods[]->{
      sku,
      name,
      retailPrice,
      isOnSale,
      "image":images[0].image.asset->url
  }
}`);

export async function getPopular() {
  return await client.fetch(
    QUERY_POPULAR,
    {},
    { cache: "force-cache", next: { tags: ["popular"] } }
  );
}
