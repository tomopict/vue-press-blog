module.exports = {
  title: 'tomo blog',
  base: '/',
  postcss: {
    plugins: [require('tailwindcss')('./tailwind.js'), require('autoprefixer')],
  },
  serviceWorker: false,
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
      title: 'tomopictのblog',
      description: 'VuePress Blog',
    }
  },
  plugins: [
    [
      '@vuepress/google-analytics',
      { ga: 'UA-131752322-1' }
    ],
    '@vuepress/blog',
    require('./plugins/index.js'),
    require('./plugins/comments.js')
  ],
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  themeConfig: {
    nav: [
      {type: 'link', text: 'about', link: '/about/' },
      {type: 'link', text: 'twitter', link: 'https://twitter.com/tomopict' },
      {type: 'link', text: 'github', link: 'https://github.com/tomopict' }
    ],
    lastUpdated: true,
    sidebar: [
      {
        title: 'Blog',
        children: [
          '/_posts/20181231',
          '/_posts/20190105'
        ]
      }
    ]
  }
}