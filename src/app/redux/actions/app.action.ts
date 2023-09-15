import { createAction, props } from '@ngrx/store';
import { StateType } from '../reducers/counter.reducer';

export const loadPosts = createAction('[Data] Load Data', props<{ data:  StateType['posts'] | undefined}>());
