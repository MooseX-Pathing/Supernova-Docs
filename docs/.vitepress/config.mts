import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "ApexPathing Docs",
  description: 'ApexPathing Docs',
  base: '/Supernova-Docs/',
  themeConfig: {
    nav: [
      { text: 'About', link: '/about' },
      { text: 'Guide', link: '/guide'}
    ],


//search bar
 search: {
      provider: 'local'
    }, 





    
    //sidebar stuff
     sidebar: [
      {// Getting started area thingy, next header will be outside of this area in a new {} loop (irdk what to call it man)
        text: 'Getting Started',//header
        items: [//items under header
          { text: 'About',
            link: '/getting started/about' 
          },
    
          
          { text: 'Installation',
            link: '/getting started/installation' 
          }
        ],
      },
      {
        text: 'Tuning'
      }
    ]

  }
  

})
