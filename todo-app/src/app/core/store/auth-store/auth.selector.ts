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
export const getAuthData = createSelector(
  getFeature,
  state => state.token
)
export const getAccessToken = createSelector(
  getAuthData,
  token => token?.token && token
)

export const isAuth = createSelector(
  getAccessToken,
  token => !!token
)

export const getUser = createSelector(
  getFeature,
  state => state.user
)

export const getEmail = createSelector(
  getUser,
  user => user?.email
)
