import { defineConfig } from 'vitepress'
import {
  navbarEn,
  navbarZh,
  sidebarEn,
  sidebarZh,
} from "./configs";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "cordova-plugin-alipay",
  description: "cordova plugin for alipay sdk",
  base: "/doc/cordova-plugin-alipay",
  themeConfig: {
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: {svg:"<svg class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"16068\" width=\"200\" height=\"200\"><path d=\"M512 901.746939c-13.583673 0-26.122449-4.179592-37.093878-13.061225-8.881633-7.314286-225.697959-175.020408-312.424489-311.379592C133.746939 532.37551 94.040816 471.24898 94.040816 384.522449c0-144.718367 108.146939-262.269388 240.326531-262.269388 67.395918 0 131.657143 30.82449 177.632653 84.636735 45.453061-54.334694 109.191837-84.636735 177.110204-84.636735 132.702041 0 240.326531 117.55102 240.326531 262.269388 0 85.159184-37.093878 143.673469-67.395919 191.216327l-1.044898 1.567346c-86.726531 136.359184-303.542857 304.587755-312.424489 311.379592-10.44898 8.359184-22.987755 13.061224-36.571429 13.061225z\" fill=\"#E5404F\" ></path></svg>"}, link: 'https://byteee.fund/project/cordova-plugin-alipay' },
      { icon: 'github', link: 'https://github.com/byteee-fund/cordova-plugin-alipay-doc' }
    ],
    footer: {
      message: 'Apache 2.0 License.',
      copyright: 'Copyright © 2024. <a href="https://byteee.fund" target="_blank">BSF</a>'
    }
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        nav: navbarEn,
        sidebar:sidebarEn
      }
    },
    zh: {
      label: '中文',
      lang: 'zh',
      themeConfig: {
        nav: navbarZh,
        sidebar:sidebarZh
      }
    },
  },
  lastUpdated: true
})
