import { defineConfig } from 'vitepress'
import container from 'markdown-it-container'
import guide from "./sidebar/guide.mts";

export default defineConfig({
  title: "ApexPathing Docs",
  description: 'ApexPathing Docs',
  head: [
    ['link', { rel: 'icon', href: '/Supernova-Docs/images/apex_logo.png' }]
  ],
  base: '/Supernova-Docs/',
  themeConfig: {
    nav: [
      { text: 'About', link: '/about' },
      { text: 'Guide', link: '/guide/installation'}
    ],

    search: {
      provider: 'local'
    }, 
    
    
    //sidebar stuff
    sidebar: {
      '/guide/': guide
    }
  },
  appearance: 'force-dark',
  markdown: {
    config: (md) => {
      md.use(container, 'card', {
        render(tokens, idx) {
          if (tokens[idx].nesting === 1) {
            return `<div class="next-card">`;
          } else {
            return `</div>`;
          }
        }
      })
    }
  }
})
