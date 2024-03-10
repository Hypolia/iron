import { type Route } from '@hypolia/routes'
import { PageGeneralFeature } from './feature/page-general-feature'

export const ROUTER_SERVERS: Route[] = [
  {
    path: "/general",
    component: <PageGeneralFeature />
  }
]
