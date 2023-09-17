import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { SearchItem } from '../models/search-item.model';
import { switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'search';

  private apiUrl2 = 'videos';

  constructor(private http: HttpClient) {}

  getData(search: string) {
    return this.fetchData1(search).pipe(
      switchMap((response1) => {
        return this.fetchData2(response1);
      })
    );
  }

  fetchData1(search: string) {
    const params = new HttpParams()
      .set('type', 'video')
      .set('maxResults', '15')
      .set('q', search);
    return this.http.get(this.apiUrl, { params });
  }

  fetchData2(
    ids: { items?: Array<{ etag: string; kind: string; id: { videoId: string; kind: string } }> }
  ) {
    const tt = ids.items?.map((i) => i.id.videoId).join(',');
    const params2 = new HttpParams()
      .set('id', tt || '123')
      .set('part', 'snippet,statistics');

    return this.http.get(this.apiUrl2, { params: params2 });
  }

  getOneVideo(selectedId: string) {
    const params2 = new HttpParams()
      .set('id', selectedId)
      .set('part', 'snippet,statistics');

    return this.http.get(this.apiUrl2, { params: params2 });
  }
}
