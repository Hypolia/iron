import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router'
import { ROUTER } from './router.main'
import { match } from 'ts-pattern'
import {getUserState, useGetUserQuery, useLoginMutation, userActions} from "@hypolia/domains/users";
import {useCallback, useEffect, useMemo, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "@hypolia/state/store";
import { Layout } from '@hypolia/layout'
import { ProtectedRoute, useAuth } from '@hypolia/auth'
import { LoadingScreen } from '@hypolia/ui';
import {useOidc, useOidcAccessToken} from "@axa-fr/react-oidc";
import {Toaster} from "react-hot-toast";
import { Transmit } from '@adonisjs/transmit-client'




export default function App() {
  const { isLoading } = useSelector(getUserState)
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()
  const { pathname } = useLocation()
  const { isAuthenticated, login,  } = useOidc()
  const { accessToken, accessTokenPayload } = useOidcAccessToken()
  const [call, setCall] = useState(false)


  


  useEffect(() => {
    if (!isAuthenticated) {
      login('/home')
    }
  }, [isAuthenticated])

  useEffect(() => {
    if (accessToken && accessTokenPayload) {
      dispatch(userActions.setUser({
        user: accessTokenPayload,
        token: accessToken
      }))
      setCall(true)
    }
  }, [accessToken, accessTokenPayload]);


  if (isLoading && !pathname.includes('authentication')) {
    return (
      <LoadingScreen />
    )
  }



 

  return (
    <div>
      <Toaster />
      <Routes>

        {ROUTER.map((route) =>
          match(route)
            .when((r) => r.layout, (r) => (
              <Route
                key={r.path}
                path={r.path}
                element={
                  <Layout topBar={r.topBar}>
                    {r.protected ? <ProtectedRoute>{r.component}</ProtectedRoute> : r.component}
                  </Layout>
                }
              />
            ))
            .otherwise((r) => (
              <Route
                key={r.path}
                path={r.path}
                element={!r.protected ? r.component : <ProtectedRoute>{r.component}</ProtectedRoute>}
              />
            ))
        )}

       {/* <Route path="/*" element={<Navigate to="/home" replace />} />*/}
      </Routes>
    </div>
  )
}

function AuthCallback() {
  const navigate = useNavigate()

  return (
    <LoadingScreen />
  )
}
