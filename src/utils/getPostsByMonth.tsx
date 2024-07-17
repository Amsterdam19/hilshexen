import { LOCALE } from "@config";
import type { CollectionEntry } from "astro:content";

const getPostsByMonth = (posts: CollectionEntry<"blog">[], month: string) =>
  posts
    .filter(({ data }) => data.pubDatetime.toLocaleDateString(LOCALE.langTag, {month: "long"}) === month).reverse();

export default getPostsByMonth;
