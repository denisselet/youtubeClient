import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YoutubeRoutingModule } from './youtube-routing.module';
import { DataService } from './services/data.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    YoutubeRoutingModule
  ],
  providers:[DataService]
})
export class YoutubeModule { }
