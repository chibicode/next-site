const courses = [
  {
    id: 'basics',
    name: 'Basics',
    lessons: [
      {
        id: 'getting-started',
        name: 'Getting Started',
        steps: [
          {
            id: 'setup',
            points: 20
          },
          {
            id: '404-page',
            points: 5
          },
          {
            id: 'first-page',
            points: 20
          },
          {
            id: 'errors',
            points: 5
          },
          {
            id: 'finally',
            points: 5
          }
        ]
      },
      {
        id: 'navigate-between-pages',
        name: 'Navigate Between Pages',
        steps: [
          {
            id: 'setup',
            points: 5
          },
          {
            id: 'using-link',
            points: 25
          },
          {
            id: 'client-side-history',
            points: 5
          },
          {
            id: 'adding-link-props',
            points: 15
          },
          {
            id: 'link',
            points: 5
          },
          {
            id: 'simple-but-powerful',
            points: 5
          }
        ]
      },
      {
        id: 'using-shared-components',
        name: 'Using Shared Components',
        steps: [
          {
            id: 'setup',
            points: 5
          },
          {
            id: 'create-the-header-component',
            points: 10
          },
          {
            id: 'using-the-header-component',
            points: 25
          },
          {
            id: 'the-component-directory',
            points: 5
          },
          {
            id: 'the-layout-component',
            points: 20
          },
          {
            id: 'rendering-children-components',
            points: 5
          },
          {
            id: 'use-components',
            points: 5
          }
        ]
      },
      {
        id: 'create-dynamic-pages',
        name: 'Create Dynamic Pages',
        steps: [
          {
            id: 'setup',
            points: 5
          },
          {
            id: 'adding-a-list-of-posts',
            points: 25
          },
          {
            id: 'passing-data',
            points: 10
          },
          {
            id: 'use-router',
            points: 5
          },
          {
            id: 'finally',
            points: 5
          }
        ]
      },
      {
        id: 'clean-urls-with-dynamic-routing',
        name: 'Clean URLs with Dynamic Routing',
        steps: [
          {
            id: 'setup',
            points: 5
          },
          {
            id: 'dynamic-routing',
            points: 30
          },
          {
            id: 'history-awareness',
            points: 5
          },
          {
            id: 'finally',
            points: 5
          }
        ]
      },
      {
        id: 'fetching-data-for-pages',
        name: 'Fetching Data for Pages',
        steps: [
          {
            id: 'setup',
            points: 5
          },
          {
            id: 'fetching-batman-shows',
            points: 30
          },
          {
            id: 'only-on-the-server',
            points: 5
          },
          {
            id: 'fetching-data-for-pages',
            points: 25
          },
          {
            id: 'fetch-data-in-client-side',
            points: 5
          },
          {
            id: 'finally',
            points: 5
          }
        ]
      },
      {
        id: 'styling-components',
        name: 'Styling Components',
        steps: [
          {
            id: 'setup',
            points: 5
          },
          {
            id: 'styling-our-home-page',
            points: 35
          },
          {
            id: 'styles-template-strings',
            points: 5
          },
          {
            id: 'styles-and-nested-components',
            points: 25
          },
          {
            id: 'no-effect-for-nested-components',
            points: 15
          },
          {
            id: 'global-styles',
            points: 20
          },
          {
            id: 'global-styles-work',
            points: 10
          },
          {
            id: 'what-next',
            points: 10
          }
        ]
      },
      {
        id: 'api-routes',
        name: 'API Routes',
        steps: [
          {
            id: 'setup',
            points: 5
          },
          {
            id: 'creating-an-api-route',
            points: 20
          },
          {
            id: 'fetching-api-routes',
            points: 10
          },
          {
            id: 'middlewares',
            points: 25
          },
          {
            id: 'finally',
            points: 5
          }
        ]
      },
      {
        id: 'deploying-a-nextjs-app',
        name: 'Deploying a Next.js App',
        steps: [
          {
            id: 'setup',
            points: 5
          },
          {
            id: 'deploying-to-zeit-now',
            points: 15
          },
          {
            id: 'deploying-to-your-own-environment',
            points: 5
          },
          {
            id: 'build-and-start',
            points: 10
          },
          {
            id: 'run-two-instances',
            points: 20
          },
          {
            id: 'build-once-run-many-instances',
            points: 5
          },
          {
            id: 'finally',
            points: 5
          }
        ]
      }
    ]
  },
  {
    id: 'excel',
    name: 'Excel',
    lessons: [
      {
        id: 'static-html-export',
        name: 'Export into a Static HTML App',
        steps: [
          {
            id: 'setup',
            points: 5
          },
          {
            id: 'export-the-index-page',
            points: 20
          },
          {
            id: 'only-the-index-page',
            points: 5
          },
          {
            id: 'exporting-other-pages',
            points: 25
          },
          {
            id: 'no-need-to-build-always',
            points: 15
          },
          {
            id: 'show-page-is-already-there',
            points: 5
          },
          {
            id: 'deploying-the-app',
            points: 5
          },
          {
            id: 'thats-it',
            points: 5
          }
        ]
      },
      {
        id: 'typescript',
        name: 'TypeScript',
        steps: [
          {
            id: 'setup',
            points: 25
          },
          {
            id: 'home-page',
            points: 20
          },
          {
            id: 'page-types',
            points: 10
          },
          {
            id: 'finally',
            points: 5
          }
        ]
      },
      {
        id: 'lazy-loading-modules',
        name: 'Lazy Loading Modules',
        steps: [
          {
            id: 'setup',
            points: 5
          },
          {
            id: 'analyze-the-app',
            points: 20
          },
          {
            id: 'analyze-result',
            points: 5
          },
          {
            id: 'lazy-loading',
            points: 25
          },
          {
            id: 'its-own-bundle',
            points: 5
          },
          {
            id: 'lets-test-it',
            points: 25
          },
          {
            id: 'test-results',
            points: 5
          },
          {
            id: 'finally',
            points: 5
          }
        ]
      },
      {
        id: 'lazy-loading-components',
        name: 'Lazy Loading Components',
        steps: [
          {
            id: 'setup',
            points: 5
          },
          {
            id: 'lets-analyze',
            points: 15
          },
          {
            id: 'analyze-result',
            points: 5
          },
          {
            id: 'hello-dynamic-components',
            points: 25
          },
          {
            id: 'it-always-loads',
            points: 5
          },
          {
            id: 'load-only-if-needed',
            points: 25
          },
          {
            id: 'lazy-loading',
            points: 5
          },
          {
            id: 'finally',
            points: 5
          }
        ]
      },
      {
        id: 'amp',
        name: 'Create AMP Pages',
        steps: [
          {
            id: 'amp-only',
            points: 5
          },
          {
            id: 'hybrid-amp',
            points: 5
          }
        ]
      },
      {
        id: 'automatic-static-optimization',
        name: 'Automatic Static Optimization',
        steps: [
          {
            id: 'setup',
            points: 20
          },
          {
            id: 'static-build',
            points: 5
          },
          {
            id: 'ssr',
            points: 15
          },
          {
            id: 'serverless',
            points: 15
          },
          {
            id: 'finally',
            points: 5
          }
        ]
      }
    ]
  }
];

export default courses;
