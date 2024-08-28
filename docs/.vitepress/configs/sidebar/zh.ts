import { DefaultTheme } from "vitepress"
type Sidebar = DefaultTheme.Sidebar

export const sidebarZh: Sidebar = {
  '/zh/guide/': [
    {
      text: '指南',
      items: [
        {text: "关于", link: "/zh/guide/index.md"},
        {text: "快速开始", link: "/zh/guide/quickstart.md"},
        {text: "Capacitor/Ionic", link: "/zh/guide/capacitor.md"},
        {text: "常见问题", link: "/zh/guide/troubleshooting.md"},
        {text: "错误码", link: "/zh/guide/errcode.md"},
        {text: "更新日志", link: "/zh/guide/changelog.md"}
      ],
    },
  ],
  '/zh/api/': [
    {
      text: 'API',
      items: [
        {text: "登录（authV2）", link: "/zh/api/auth-v2.md"},
        {text: "支付（payV2）", link: "/zh/api/pay-v2.md"},
        {text: "获取版本号（GetVersion）", link: "/zh/api/get-version.md"},
        {text: "开始日志（startLog）", link: "/zh/api/start-log.md"},
        {text: "停止日志（stopLog）", link: "/zh/api/stop-log.md"},
      ],
    },
  ],

}