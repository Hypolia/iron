import {Route} from "@hypolia/routes";
import {PageGeneralFeature} from "./feature/page-general-feature";

export const ROUTER_SETTINGS: Route[] = [
  {
    path: '/general',
    component: <PageGeneralFeature />
  }
]
