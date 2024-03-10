import { Route } from '@hypolia/routes'
import { PageGeneralFeature } from './feature/page-general-feature'

export const ROUTER_HOME: Route[] = [
  {
    path: '/',
    component: <PageGeneralFeature />
  }
]
