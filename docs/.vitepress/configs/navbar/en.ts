import { DefaultTheme } from "vitepress"
type NavItem = DefaultTheme.NavItem

export const navbarEn: NavItem[] = [
  {
    text: 'Guide',
    link: "/guide"
  },
  {
    text: 'API',
    items: [
      {
        text: "AuthV2",
        link: "/api/auth-v2.md"
      },
      {
        text: "PayV2",
        link: "/api/pay-v2.md"
      },
    ],
  },
  {
    text: 'Capacitor/Ionic',
    link: "/guide/capacitor.md"
  },
]