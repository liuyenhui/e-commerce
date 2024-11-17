import { defineQuery } from "next-sanity";
import { client } from "@/sanity/lib/client";

const QUERY_HEADER = defineQuery(`*[_type == "header"][0]
    {_id,title,subTitle,"backgroundColor": background.rgb,"logo": logo.asset->url}`);

export async function getHeader() {
  return await client.fetch(QUERY_HEADER);
}
