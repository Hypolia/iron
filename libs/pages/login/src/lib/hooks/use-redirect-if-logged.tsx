import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { AppDispatch } from '@hypolia/state/store'
import { useEffect } from "react";
import { getUserState } from "@hypolia/domains/users";

export function useRedirectIfLogged(path: string | undefined = '/home') {
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()

  const auth = useSelector(getUserState)



  useEffect(() => {
    if (auth.isAuthenticated) {
      navigate(path)
    }
  }, [auth])
}
