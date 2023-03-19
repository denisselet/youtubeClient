import { Component } from '@angular/core';
import { SearchItem } from './search/search-item.model';
import { default as data } from './data/results.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'youtubeClient';

  items: SearchItem[] = data.items;
}
