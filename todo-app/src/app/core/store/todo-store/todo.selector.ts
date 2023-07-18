import { createFeatureSelector, createSelector } from "@ngrx/store";
import {TodoState} from "./todo.state";
import {TODO_FEATURE_NAME} from "./todo.reducer";

export const getFeature = createFeatureSelector<TodoState>(TODO_FEATURE_NAME)

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
export const getCourseData = createSelector(
  getFeature,
  state => state.data
)

export const getBreadcrumb = createSelector(
  getFeature,
  state => state.breadcrumbsHeader
)
