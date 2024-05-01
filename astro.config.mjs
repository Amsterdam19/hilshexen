import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://hils-heika.de/",
  integrations: [tailwind({
    applyBaseStyles: false
  }), react(), sitemap(
    {
      serialize(item) {
        if (/impressum/.test(item.url)) {
          return undefined;
        }
        if (/datenschutz/.test(item.url)) {
          return undefined;
        }
        if (/your-special-page/.test(item.url)) {
          item.changefreq = 'daily';
          item.lastmod = new Date();
          item.priority = 0.9;
        }
        return item;
      },
    }
  ), icon()],
  markdown: {
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true
    },
    extendDefaultPlugins: true
  },
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"]
    }
  },
  scopedStyleStrategy: "where",
  prefetch: true
});