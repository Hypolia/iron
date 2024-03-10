import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {permissionApi, roleApi, userApi, userReducer} from "@hypolia/domains/users";
import {serversApi} from "@hypolia/domains/servers";

export const rootReducer = combineReducers({
  user: userReducer,
  [userApi.reducerPath]: userApi.reducer,
  [roleApi.reducerPath]: roleApi.reducer,
  [permissionApi.reducerPath]: permissionApi.reducer,
  [serversApi.reducerPath]: serversApi.reducer
})

export function setupStore(preloadedState?: never) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: true
      })
        .concat(userApi.middleware)
        .concat(roleApi.middleware)
        .concat(permissionApi.middleware)
        .concat(serversApi.middleware)
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
