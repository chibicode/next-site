export default {
  routes: [
    {
      title: 'Examples',
      heading: true,
      routes: [
        {
          introduction: true
        },
        {
          title: 'CSS-in-JS',
          open: true,
          routes: [
            {
              title: 'Styled components',
              path: '/examples/with-styled-components'
            },
            {
              title: 'Styletron',
              path: '/examples/with-styletron'
            },
            {
              title: 'Glamor',
              path: '/examples/with-glamor'
            },
            {
              title: 'Cxs',
              path: '/examples/with-cxs'
            },
            {
              title: 'Aphrodite',
              path: '/examples/with-aphrodite'
            },
            {
              title: 'Fela',
              path: '/examples/with-fela'
            }
          ]
        }
      ]
    }
  ]
};
