import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), mdx()],
  output: "server",
  adapter: vercel({
    /* 
      [@astrojs/vercel/serverless] Vercel's hosting plans might have limits to the number of functions you can create.
      You can set functionPerRoute: false to prevent surpassing the limit.
    */
    functionPerRoute: false
  })
});