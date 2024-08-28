import { DefaultTheme } from "vitepress"
type Sidebar = DefaultTheme.Sidebar

export const sidebarEn: Sidebar = {
  '/guide': [
    {
      text: 'Guide',
      items: [
        {text: "About", link: "/guide/index.md"},
        {text: "Quickstart", link: "/guide/quickstart.md"},
        {text: "Capacitor/Ionic", link: "/guide/capacitor.md"},
        {text: "Troubleshooting", link: "/guide/troubleshooting.md"},
        {text: "Errcode", link: "/guide/errcode.md"},
        {text: "Changelog", link: "/guide/changelog.md"}
      ],
    },
  ],
  '/api/': [
    {
      text: 'API',
      items: [
        {text: "authV2", link: "/api/auth-v2.md"},
        {text: "payV2", link: "/api/pay-v2.md"},
        {text: "GetVersion", link: "/api/get-version.md"},
        {text: "startLog", link: "/api/start-log.md"},
        {text: "stopLog", link: "/api/stop-log.md"},
      ],
    },
  ],

}