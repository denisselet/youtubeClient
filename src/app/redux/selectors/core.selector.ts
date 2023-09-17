import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StoreType } from './../reducers/core.reducer';

export const selectFeature = createFeatureSelector<StoreType>('store');

export const selectPosts = createSelector(
  selectFeature,
  (state) => state.posts
);

export const selectGetPostById = (id: string) => {
  return createSelector(selectPosts, (arr) => {
    return arr.find((post) => post.id === id);
  });
};
