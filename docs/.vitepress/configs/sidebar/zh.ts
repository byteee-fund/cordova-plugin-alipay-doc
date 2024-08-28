import { DefaultTheme } from "vitepress"
type Sidebar = DefaultTheme.Sidebar

export const sidebarZh: Sidebar = {
  '/zh/guide/': [
    {
      text: '指南',
      items: [
        {text: "关于", link: "/guide/index.md"},
        {text: "快速开始", link: "/guide/quickstart.md"},
        {text: "常见问题", link: "/guide/troubleshooting.md"},
        {text: "错误码", link: "/guide/errcode.md"},
        {text: "更新日志", link: "/guide/changelog.md"}
      ],
    },
  ],
  '/zh/api/': [
    {
      text: 'API',
      items: [
        {text: "登录（authV2）", link: "/api/auth-v2.md"},
        {text: "支付（payV2）", link: "/api/pay-v2.md"},
        {text: "获取版本号（GetVersion）", link: "/api/get-version.md"},
        {text: "开始日志（startLog）", link: "/api/start-log.md"},
        {text: "停止日志（stopLog）", link: "/api/stop-log.md"},
      ],
    },
  ],

}