import { Component, EventEmitter, Output } from '@angular/core';
import { SortTypes } from '../models/sort.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() sort = new EventEmitter<{ type: SortTypes; orderAsc: boolean; term: string }>();

  @Output() addResult = new EventEmitter();

  settingShow = false;

  term = '';

  type: SortTypes = 'date';

  orderAsc = true;

  sendSort() {
    this.sort.emit({ type: this.type, orderAsc: this.orderAsc, term: this.term });
  }

  submit() {
    this.addResult.emit();
  }
}
