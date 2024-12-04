import { defineQuery } from "next-sanity";
import { client } from "@/sanity/lib/client";

const QUERY_HEADER = defineQuery(`*[_type == "header"][0]
    {_id,title,subTitle,"backgroundColor": background.rgb,"logo": logo.asset->url}`);

export async function getHeader() {
  return await client.fetch(QUERY_HEADER, {}, { next: { tags: ["post"] } });
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
  return await client.fetch(QUERY_HERO, {}, { next: { tags: ["post"] } });
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
  return await client.fetch(QUERY_PLAY, {}, { next: { tags: ["post"] } });
}
