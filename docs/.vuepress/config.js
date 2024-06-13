module.exports = {
    title: '伊のBlog',
    description: 'Just playing around',
    head: [
        // 站点图标
        ["link", { rel: "icon", href: "/logo.svg" }]],

    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Leetcode题解', link: '/Leetcode题解/' },
            { text: 'Github', link: 'https://github.com/EthanCh30' },
        ],

        sidebar: 'auto'
    }


}