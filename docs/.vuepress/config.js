module.exports = {
    title: 'Lylwfoye的博客',
    description: 'Lylwfoye',
    base: '/blog/',
    theme: 'reco',//主题
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            {
                text: "Lylwfoye的博客",
                items: [
                    { text: "掘金", link: "https://juejin.cn" },
                    { text: "Github", link: "https://github.com" }
                ]
            }
        ],
        sidebar: [
            {
                title: '欢迎学习',
                path: '/',
                collapsable: false, // 是否折叠
                children: [{ title: '博客简介', path: '/' }]
            },
            {
                title: '网络基础',
                path: '/blogs/network/1',
                collapsable: true,
                children: [{ title: '第一篇', path: '/blogs/network/1' }],
            },
            {
                title: '前端理论',
                path: '/blogs/web_theory/1',
                collapsable: true,
                children: [{ title: '第一篇', path: '/blogs/web_theory/1' }],
            },
            {
                title: '前端工具',
                path: '/blogs/web_tool/1',
                collapsable: true,
                children: [{ title: '第一篇', path: '/blogs/web_tool/1' }],
            },
        ]
    }
}