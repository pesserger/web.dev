module.exports = {
  // Tags are inherited by all posts.
  tags: ['pathItem', 'lighthouse-pwa'],
  path: {
    // Slug is used by landing pages like / and /learn to link to this path.
    // Because it affects urls, the slug should never be translated.
    slug: 'lighthouse-pwa',
    cover: '/images/collections/lighthouse.png',
    title: 'PWA audits',
    description:
      'These checks validate the aspects of a Progressive Web App',
    overview: `Lorem ipsum dolor set amet...`,
    topics: [
      {
        title: 'Fast and reliable',
        pathItems: [
          'load-fast-enough-for-pwa',
          'works-offline',
          'offline-start-url',
        ],
      },
      {
        title: 'Installable',
        pathItems: [
          'is-on-https',
          'service-worker',
          'installable-manifest',
        ],
      },
      {
        title: 'PWA optimized',
        pathItems: [
          'redirects-http',
          'splash-screen',
          'themed-omnibox',
          'content-width',
          'viewport',
          'without-javascript',
        ],
      },
      {
        title: 'Additional items to manually check',
        pathItems: [
          'pwa-cross-browser',
          'pwa-page-transitions',
          'pwa-each-page-has-url',
        ],
      },
    ],
  },
};