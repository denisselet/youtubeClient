import { Component } from '@angular/core';
import { SearchItem } from '../../models/search-item.model';
import { SortTypes } from '../../models/sort.model';
import { DataService } from '../../services/data.service';
import { Observable, Subject, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap  } from 'rxjs/operators';
import { SearchResponse } from '../../models/search-response.model';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  inputObservable$: Observable<string> | Observable<object>;

  private inputSubject = new Subject<string>();

  constructor(private dataService: DataService, private authService: AuthService) {
    this.inputObservable$ = this.inputSubject.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(value => {
        if (value.length >= 3) {
          return this.dataService.getData(value);
        } else {
          return of('');
        }
      })
    );

    this.inputObservable$.subscribe(resp => {
      if (typeof resp !== 'string') {
        this.items = (resp as SearchResponse).items;
      }
    });
  }

  items: SearchItem[] = [];

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
