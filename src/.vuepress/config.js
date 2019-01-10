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
  plugins: [
    [
      '@vuepress/google-analytics',
      { ga: 'UA-131752322-1' }
    ],
    '@vuepress/blog',
  ],
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  themeConfig: {
    nav: [
      {type: 'link', text: 'Home', link: '/' },
      {type: 'link', text: 'twitter', link: 'https://twitter.com/tomopict' },
      {type: 'link', text: 'github', link: 'https://github.com/tomopict' }
    ],
    sidebar: [
      {
        title: 'Blog',
        children: [
          '/blog/20181231',
          '/blog/20190105'
        ]
      }
    ]
  }
}