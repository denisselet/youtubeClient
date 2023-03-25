import { Component, Input, OnInit } from '@angular/core';
import { SearchItem } from '../../models/search-item.model';
import { daysInMs } from 'src/app/constants/date';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent implements OnInit {
  @Input() item: SearchItem;

  date = 0;

  ngOnInit(): void {
    this.date = this.handleDate();
  }

  handleDate() {
    const publishedMs = Date.parse(this.item.snippet.publishedAt);
    const dateNowMs = Date.now();
    return (Math.floor((dateNowMs - publishedMs) / daysInMs));
  }
}
