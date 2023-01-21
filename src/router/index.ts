import Index from '../pages/Index.svelte'
import ZipcodeSearch from '../pages/ZipcodeSearch.svelte'
import PathApiPage from '../pages/PathApiPage.svelte'
import ExecuteJavaScript from '../pages/ExecuteJavaScript.svelte'

type RouteWithTitle = {
  location: string,
  title: string,
  component: any,
};

export const routesWithTitle : Array<RouteWithTitle> = [
  {
      location: '/',
      title: 'Index',
      component: Index,
  },
  {
      location: '/zipcode_search',
      title: 'Zipcode Search',
      component: ZipcodeSearch,
  },
  {
      location: '/path_api_page',
      title: 'path | Tauri Apps',
      component: PathApiPage,
  },
  {
      location: '/execute_javascript',
      title: 'Execute JavaScript',
      component: ExecuteJavaScript,
  },
];

export const routes = routesWithTitle.reduce((prev: Object, curr: RouteWithTitle, _index) => {
  prev[curr.location] = curr.component;
  return prev;
}, {});