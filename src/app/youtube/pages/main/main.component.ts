import { Component } from '@angular/core';
import { SearchItem } from '../../models/search-item.model';
import { SortTypes } from '../../models/sort.model';
import { DataService } from '../../services/data.service';
import { Observable, Subject, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap  } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Store } from '@ngrx/store';
import { loadData } from 'src/app/redux/actions/core.action';
import { selectPosts } from 'src/app/redux/selectors/core.selector';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  inputObservable$: Observable<string> | Observable<object>;

  items$: Observable<SearchItem[]> = this.store.select(selectPosts);

  private inputSubject = new Subject<string>();

  constructor(private dataService: DataService, private authService: AuthService, private store: Store) {
    this.inputSubject.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(value => {
        if (value.length >= 3) {
          this.store.dispatch(loadData({ value }));
        }
        return of('');
      })
    ).subscribe();
  }



  sortingType: { type: SortTypes; orderAsc: boolean; term: string } = {
    type: 'date',
    orderAsc: true,
    term: '',
  };

  sort(event: { type: SortTypes; orderAsc: boolean; term: string }) {
    this.sortingType = event;
  }

  receivedInput(value: string) {
    this.inputSubject.next(value);
  }
}
