import { Component } from '@angular/core';
import { SearchItem } from '../../models/search-item.model';
import { SortTypes } from '../../models/sort.model';
import { default as data } from './../../../data/results.json';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  items: SearchItem[] = [];

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
