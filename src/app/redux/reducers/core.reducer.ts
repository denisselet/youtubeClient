import { createReducer, on } from '@ngrx/store';
import { loadDataSuccess, loadInCustomPosts } from '../actions/core.action';
import { SearchItem } from 'src/app/youtube/models/search-item.model';
import { CustomPost } from 'src/app/youtube/models/customPost.model';

export interface StoreType {
  posts: SearchItem[];
  customPosts: CustomPost[];
}

export const initialState: StoreType = {
  posts: [],
  customPosts: [],
};

export const appReducer = createReducer(
  initialState,
  on(loadDataSuccess, (state, { data }): StoreType => ({ ...state, posts: data.items })),
  on(loadInCustomPosts, (state, { data }) => ({ ...state, customPosts: state.customPosts.concat(data) }))
);
