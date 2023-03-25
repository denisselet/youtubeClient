import { Component } from '@angular/core';
import { SearchItem } from './models/search-item.model';
import { default as data } from './data/results.json';
import { SortTypes } from './models/sort.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'youtubeClient';

  items: SearchItem[] | [] = [];

  sortingType: { type: SortTypes; orderAsc: boolean, term: string } = {
    type: 'date',
    orderAsc: true,
    term: ''
  };

  sort(event: { type: SortTypes; orderAsc: boolean; term: string }) {
    this.sortingType = event;
  }

  addData() {
    this.items = data.items;
  }
}
