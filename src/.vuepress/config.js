module.exports = {
  title: 'tomopictのblog',
  base: '/',
  postcss: {
    plugins: [require('tailwindcss')('./tailwind.js'), require('autoprefixer')],
  },
  serviceWorker: false,
  head: [
    ['link', { rel: 'icon', type: 'image/jpg', href: '/favicon.jpg' }],
    ['meta',{ name:"keywords", content:"tech, vue"}],
    ['meta',{ name:"og:title", content:"tomopictのblog"}],
    ['meta',{ name:"og:description", content:"技術関連を中心に書いていくblogです"}],
    ['meta',{ name:"og:type", content:"website"}],
    ['meta',{ name:"og:image", content:"image/jpg"}],
    ['meta',{ name:"og:url", content:"https://tomopict.netlify.com/"}]
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