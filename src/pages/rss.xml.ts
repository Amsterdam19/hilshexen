import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import getSortedPosts from "@utils/getSortedPosts";
import slugify from "@utils/slugify";
import { SITE } from "@config";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

export async function GET() {
  const posts = await getCollection("blog");
  const sortedPosts = getSortedPosts(posts);
  return rss({
    title: SITE.title,
    description: SITE.desc,
    site: SITE.website,
    items: sortedPosts.map((post) => ({
      link: `posts/${slugify(post.data)}`,
      title: post.data.title,
      description: post.data.description,
      pubDate: new Date(post.data.pubDatetime),
      content: `${['<img src="' + SITE.website + post.data.heroImage.src + '" alt="" />' + sanitizeHtml(parser.render(post.body))]}`,
    })),
  });
}
