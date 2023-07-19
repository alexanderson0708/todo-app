import {createFeatureSelector, createSelector} from "@ngrx/store";
import {AuthState} from "./auth.state";

export const AUTH_FEATURE_NAME = 'auth'

export const getFeature = createFeatureSelector<AuthState>(AUTH_FEATURE_NAME)

export const getLoading = createSelector(
  getFeature,
  state => state.loading
)
export const getLoaded = createSelector(
  getFeature,
  state => state.loaded
)
export const getServerError = createSelector(
  getFeature,
  state => state.error
)
export const getServerErrorMsg = createSelector(
  getServerError,
  err => err ? err.error.message : ''
)
export const getAuthData = createSelector(
  getFeature,
  state => state.authData
)
export const getAccessToken = createSelector(
  getAuthData,
  authData => authData ? authData.token : null
)

export const isAuth = createSelector(
  getAccessToken,
   token => token ? true : false
)

export const getUser = createSelector(
  getFeature,
  state => state.authData
)

export const getEmail = createSelector(
  getUser,
  user => user ? user.username : 'login'
)

export const getUserId = createSelector(
  getUser,
  user => user ? user.user_id : null
)
