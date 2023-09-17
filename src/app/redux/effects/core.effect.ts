import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadData, loadDataSuccess } from '../actions/core.action';
import { DataService } from 'src/app/youtube/services/data.service';
import { map, mergeMap } from 'rxjs/operators';
import { SearchResponse } from 'src/app/youtube/models/search-response.model';

@Injectable()
export class DataEffects {
  constructor(
    private actions$: Actions,
    private dataService: DataService
  ) {}

  loadDataEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadData),
      mergeMap((params) => this.dataService.getData(params.value).pipe(
        map((data) => {
          return loadDataSuccess({ data: data as SearchResponse });
        })
      )
      )
    );
  });
}
