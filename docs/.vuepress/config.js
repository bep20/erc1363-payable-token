const vars = require('./.env.json');

module.exports = {
  title: 'An ERC-20 token that can be used for payments',
  description: 'The ERC-1363 is an ERC-20 compatible token that can make a callback on the receiver contract to notify token transfers or token approvals',
  base: '/erc1363-payable-token/',
  plugins: [
    ['@vuepress/google-analytics', {
      ga: vars.gaId,
    }]
  ],
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: 'https://BEP20.github.io/erc1363-payable-token' }],
    ['meta', { property: 'og:image', content: 'https://BEP20.github.io/erc1363-payable-token/assets/images/erc1363-payable-token.jpg' }], // eslint-disable-line max-len
    ['meta', { property: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { property: 'twitter:image', content: 'https://BEP20.github.io/erc1363-payable-token/assets/images/erc1363-payable-token.jpg' }], // eslint-disable-line max-len
    ['meta', { property: 'twitter:title', content: 'ERC-1363 Payable Token | An ERC-20 token that can be used for payments' }],
  ],
  themeConfig: {
    repo: 'BEP20/erc1363-payable-token',
    sidebar: 'auto',
  },
};
