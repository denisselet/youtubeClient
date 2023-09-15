import { createFeatureSelector, createSelector } from "@ngrx/store";
import { StateType } from "./../reducers/counter.reducer";

export namespace Selectors {
  export const selectFeature = createFeatureSelector<StateType>("store");

  export const count = createSelector(selectFeature , (state) => state.count);
  export const message = createSelector(selectFeature , (state) => state.message);
  export const posts = createSelector(selectFeature , (state) => state.posts);

}
