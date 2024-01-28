import {PropsWithChildren} from "react";
import { LayoutPage } from "../ui/layout-page";

export interface LayoutProps {
  topBar?: boolean
}

export function Layout({ topBar, children }: PropsWithChildren<LayoutProps>) {
  return (
    <LayoutPage topBar={topBar}>
      { children }
    </LayoutPage>
  )
}
