import { Component, OnInit } from '@angular/core';
import { default as data } from '../../../data/results.json';
import { SearchItem } from '../../models/search-item.model';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'],
})
export class ModalDescriptionComponent implements OnInit {
  constructor(private route: ActivatedRoute, private location: Location) {}

  item: SearchItem;

  selectedId: string;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.selectedId = params.get('selectedId')!;
      this.item = data.items.find((i) => i.id === params.get('selectedId'))!;
      console.log(this.item);

    });
  }

  navigateToBack() {
    this.location.back();
  }
}
