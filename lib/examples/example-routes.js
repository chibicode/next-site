import manifest from './manifest.json';
import sidebarCategories from './sidebarCategories';

const routes = [
  {
    title: 'Examples',
    heading: true,
    routes: [
      {
        introduction: true
      },
      ...sidebarCategories.map(({ title, category }) => {
        return {
          title,
          routes: Object.keys(manifest)
            .filter(key => manifest[key].categories && manifest[key].categories.includes(category))
            .sort((a, b) =>
              manifest[a].name.toLowerCase().localeCompare(manifest[b].name.toLowerCase())
            )
            .map(key => {
              return {
                title: manifest[key].name,
                path: `/examples/${key}`
              };
            })
        };
      })
    ]
  }
];

export default routes;
