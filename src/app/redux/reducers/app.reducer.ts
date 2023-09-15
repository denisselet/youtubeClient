import { createReducer, on } from '@ngrx/store';

export interface StateType {
  count: number;
  message?: string;
  posts?: { userId: number; id: number; title: string; body: string }[];
}

export const initialState: StateType = {
  count: 0,
  message: 'test',
  posts: [{ userId: 4, id: 4, title: 'string', body: 'string' }, { userId: 5, id: 5, title: 'string', body: 'string' }]
};

export const counterReducer = createReducer(
  initialState,
  on(loadPosts, (state, { data }) => ({ ...state, posts: data})),
  );
