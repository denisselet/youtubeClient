import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../models/search-item.model';
import { Sort, SortTypes } from '../models/sort.model';

@Pipe({
  name: 'sortFn',
})
export class SortPipe implements PipeTransform {
  transform(
    items: SearchItem[],
    filter: { type: SortTypes; orderAsc: boolean, term: string }
  ): SearchItem[] {
    if (filter.term) {
      items = items.filter((item) => item.snippet.tags.includes(filter.term.toLowerCase()));
    }
    switch (filter.type) {
      case Sort.date:
        items.sort((a, b) => {
          if (a.snippet.publishedAt > b.snippet.publishedAt) return -1;
          if (a.snippet.publishedAt > b.snippet.publishedAt) return 1;
          return 0;
        });
        return (filter.orderAsc) ? items : items.reverse();
      case Sort.countOfViews:
        items.sort((a, b) => {
          if (+a.statistics.viewCount > +b.statistics.viewCount) return -1;
          if (+a.statistics.viewCount > +b.statistics.viewCount) return 1;
          return 0;
        });
        return (filter.orderAsc) ? items : items.reverse();
      default:
        return items;
    }
  }
}
