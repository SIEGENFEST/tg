import {RouteConfig} from "vue-router";
import {MenuItem} from "@/router";

export function parsePageConfig(pages: MenuItem[], pathPrefix = '/') {
  const routes: RouteConfig[] = [];
  for (const page of pages) {
    if ('component' in page) {      //is SubMenu
      page.path = pathPrefix + page.path;
      routes.push(page)
    } else if ('children' in page)
      routes.push(...parsePageConfig(page.children, pathPrefix + page.path + '/'))
  }
  return routes
}
