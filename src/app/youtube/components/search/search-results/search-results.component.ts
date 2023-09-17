import { Component, Input } from '@angular/core';
import { SearchItem } from './../search-item/search-item.component';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent {

  @Input() items: SearchItem[] | null;
}
