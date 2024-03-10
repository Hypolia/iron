import {ReactElement} from 'react'
import { PageHome } from '@hypolia/pages/home'
import { PageAccounts } from '@hypolia/pages/accounts'
import {PageServers} from "@hypolia/pages/servers";
import {PageSettings} from "../../../../libs/pages/settings/src/lib/page-settings";
interface RouterProps {
  path: string
  component: ReactElement
  protected: boolean
  layout: boolean
  topBar?: boolean
  darkMode?: boolean
}

export const ROUTER: RouterProps[] = [
  {
    path: '/home/*',
    component: <PageHome />,
    layout: true,
    protected: true,
  },
  {
    path: '/accounts/*',
    component: <PageAccounts />,
    layout: true,
    protected: true
  },
  {
    path: '/servers/*',
    component: <PageServers />,
    layout: true,
    protected: true,
  },
  {
    path: '/settings/*',
    component: <PageSettings />,
    layout: true,
    topBar: false,
    protected: true
  }
]
