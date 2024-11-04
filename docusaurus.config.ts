import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  // 网站的标题
  title: 'zhiyi98的博客',
  // 网站的副标题
  tagline: 'zhiyi98博客的副标题',
  // 网站的favicon路径
  favicon: 'img/favicon.ico',

  // 网站的URL
  url: 'https://zhiyi98.github.io',
  // 网站的基础URL
  baseUrl: '/',
  // 部署分支
  deploymentBranch: 'deployment',
  // 组织的名称
  organizationName: 'zhiyi98',
  // 项目的名称
  projectName: 'zhiyi98.github.io',
  // 尾部斜杠
  trailingSlash: false,

  // 当遇到断开的链接时的处理方式：抛出错误
  onBrokenLinks: 'throw',
  // 当遇到断开的Markdown链接时的处理方式：发出警告
  onBrokenMarkdownLinks: 'warn',

  // 国际化配置
  i18n: {
    // 默认的语言环境
    defaultLocale: 'en',
    // 支持的语言环境列表
    locales: ['en'],
  },

  // 预设配置，包括文档、博客、主题等的配置
  presets: [
    [
      'classic',
      {
        docs: {
          // 侧边栏的路径
          sidebarPath: './sidebars.ts',
          // 编辑页面的URL
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          // 是否显示阅读时间
          showReadingTime: true,
          // 订阅源的配置
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // 编辑页面的URL
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // 当遇到行内标签时的处理方式：发出警告
          onInlineTags: 'warn',
          // 当遇到行内作者时的处理方式：发出警告
          onInlineAuthors: 'warn',
          // 当博客帖子未被截断时的处理方式：发出警告
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          // 自定义CSS的路径
          customCss: ['./src/css/custom.css'],
        },
      } satisfies Preset.Options,
    ],
  ],

  // 主题的配置
  themeConfig: {
    // 社交卡片的图片路径
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      // 导航栏的标题
      title: '我的网络日志',
      // 下滚动页面时，自动隐藏导航栏
      hideOnScroll: true,
      // 导航栏的项目列表
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'dailyId',
          position: 'left',
          label: '日报',
        },
        {
          type: 'docSidebar',
          sidebarId: 'weeklyId',
          position: 'left',
          label: '周刊',
        },
        {
          to: '/blog',
          label: '博客',
          position: 'left'
        },
        {
          href: 'https://github.com/zhiyi98',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      // 底部栏的样式
      style: 'dark',
      // 底部栏的链接列表
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      // 版权信息
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },

    // 代码高亮的主题配置
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  // 插件
  plugins: [
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // 添加 TailwindCSS 和 AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],

};


export default config;
