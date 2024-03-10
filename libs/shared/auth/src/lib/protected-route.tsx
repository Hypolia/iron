import { PropsWithChildren } from "react";
import { Navigate, useLocation } from "react-router";
import {useOidc} from "@axa-fr/react-oidc";

export function ProtectedRoute({ children }: PropsWithChildren) {
  const { login, isAuthenticated } = useOidc()
  const location = useLocation()

  if (!isAuthenticated) {
    login('/')
    return null
  }

  return children
}
