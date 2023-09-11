import { Component, OnInit } from '@angular/core';
import { SearchItem } from '../../models/search-item.model';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DataService } from '../../services/data.service';
import { SearchResponse } from '../../models/search-response.model';


@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'],
})
export class ModalDescriptionComponent implements OnInit {
  isLoading = true;

  constructor(private route: ActivatedRoute, private location: Location, private dataService: DataService) {}

  item: SearchItem;

  selectedId: string;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.selectedId = (params.get('selectedId') as string);

      this.dataService.getOneVideo(this.selectedId).subscribe((resp) => {
        this.item = (resp as SearchResponse).items[0];
        this.isLoading = false;
      });
    });
  }

  navigateToBack() {
    this.location.back();
  }
}
