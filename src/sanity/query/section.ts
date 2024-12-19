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

// get comments top 3 order by rating
const QUERY_COMMENTS = defineQuery(`*[_type == "comments" ]| order(rating desc){
  _id,
  user->{
    lastName,
    firstName,
  },
  "comment":text,
  rating,
  product->{
    name,
    slug,
    "image":images[0].image.asset->url
  }
}[0...3]`);

export async function getComments() {
  return await client.fetch(
    QUERY_COMMENTS,
    {},
    { cache: "force-cache", next: { tags: ["comments"] } }
  );
}

const QUERY_FEATURED =
  defineQuery(`*[_type == "featured" && _id == "featured"][0]{
  title,
  "first":{
    "title":first.title,
    "description":first.description,
    "buttonText":first.buttonText,
    "type":first.type,
    "imageurl":first.image.asset->url,
    "slug":select(
      first.type == "brand" => first.brand->slug.current,
      first.type == "tag" => first.tag->slug.current
    )
  },
  "second":{
    "title":second.title,
    "description":second.description,
    "buttonText":second.buttonText,
    "type":second.type,
    "imageurl":second.image.asset->url,
    "slug":select(
      second.type == "brand" => second.brand->slug.current,
      second.type == "tag" => second.tag->slug.current
    )
  },
}`);

export async function getFeatured() {
  return await client.fetch(
    QUERY_FEATURED,
    {},
    { cache: "force-cache", next: { tags: ["featured"] } }
  );
}
