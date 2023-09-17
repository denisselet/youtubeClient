import { createAction, props } from '@ngrx/store';
import { CustomPost } from 'src/app/youtube/models/customPost.model';
import { SearchResponse } from 'src/app/youtube/models/search-response.model';

export const loadData = createAction('[Data] Load Data', props<{ value: string }>());

export const loadDataSuccess = createAction(
  '[Data] Load Data Success',
  props<{ data: SearchResponse }>()
);

export const loadInCustomPosts = createAction(
  '[Data] Load Data Custom posts',
  props<{ data: CustomPost }>()
);

