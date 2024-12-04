import { createClient } from "next-sanity";
import { type QueryParams } from "@sanity/client";

import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
});

export async function sanityFetch<QueryResponse>({
  query,
  qParams = {},
  tags = [],
}: {
  query: string;
  qParams?: QueryParams;
  tags?: string[];
}): Promise<QueryResponse> {
  return client.fetch<QueryResponse>(query, qParams, {
    cache: "force-cache",
    next: { tags },
  });
}
