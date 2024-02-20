import { slugifyStr } from "@utils/slugify";
import Datetime from "./Datetime";
import type { CollectionEntry } from "astro:content";

export interface Props {
  href?: string;
  frontmatter: CollectionEntry<"blog">["data"];
  secHeading?: boolean;
  Card?: boolean;
}

export default function Card({ href, frontmatter, secHeading = true, Card = true }: Props) {
  const { title, heroImage, pubDatetime, description } = frontmatter;

  const headerProps = {
    style: { viewTransitionName: slugifyStr(title) },
    className: "decoration-dashed hover:underline font-bold",
  };

  return (
    <a href={href} className={Card ? ("scroll-animation postCard card tsxCard"): ("scroll-animation postCard tsxCard")}>
      <img className="h-full object-cover bg-cover postImg" src={heroImage.src} alt={"Bild zum Artikel " + title}/>
      <Datetime datetime={pubDatetime} className="postDate px-[5%]"/>
      <span
        className="inline-block font-medium decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0 text-balance text-3xl postTitle px-[5%]"
      >
        {secHeading ? (
          <h2 {...headerProps}>{title}</h2>
        ) : (
          <h3 {...headerProps}>{title}</h3>
        )}
      </span>
      <p className="text-balance mt-4 mb-6 px-[5%] line-clamp-3 text-ellipsis postDesc">{description}</p>
    </a>
  );
}
