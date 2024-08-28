import { DefaultTheme } from "vitepress"
type NavItem = DefaultTheme.NavItem

export const navbarZh: NavItem[] = [
  {
    text: '指南',
    link: "/zh/guide/index.md"
  },
  {
    text: 'API',
    items: [
      {
        text: "AuthV2",
        link: "/zh/api/auth-v2.md"
      },
      {
        text: "PayV2",
        link: "/zh/api/pay-v2.md"
      },
    ],
  },
]