module.exports = {
  title: 'tomo blog',
  head: [
    ['link', { rel: 'icon', type: 'image/jpg', href: '/favicon.jpg' }],
    ['meta',{ name:"keywords", content:"key, words, vuepress"}],
    ['meta',{ name:"og:title", content:"og title"}],
    ['meta',{ name:"og:description", content:"description"}],
    ['meta',{ name:"og:type", content:"website"}],
    ['meta',{ name:"og:url", content:"og　url"}]
  ],
  locales: {
    '/': {
      lang: 'ja',
      title: 'tomo blog',
      description: 'VuePress Blog',
    }
  },
  // plugins: [
  //   '@vuepress/last-updated'
  // ],
  plugins: {
    '@vuepress/google-analytics': {
      ga: 'UA-131752322-1'
    },
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      { text: 'Blog', link: '/blog/' }
    ],
    sidebar: [
      {
        title: 'Blog',
        children: [
          '/blog/',
          '/blog/20190105'
        ]
      }
    ]
  }
}