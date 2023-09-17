import { Component, OnInit } from '@angular/core';
import { SearchItem } from '../../models/search-item.model';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectGetPostById } from 'src/app/redux/selectors/core.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'],
})
export class ModalDescriptionComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private store: Store
  ) {}

  item$: Observable<SearchItem | undefined>;

  selectedId: string;

  ngOnInit(): void {
    const id = this.route.snapshot.params.selectedId;
    this.item$ = this.store.select(selectGetPostById(id));
  }

  navigateToBack() {
    this.location.back();
  }
}
