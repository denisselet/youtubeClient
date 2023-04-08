import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SortPipe } from './youtube/pipes/sort.pipe';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './core/pages/not-found/not-found.component';
import { ModalComponent } from './auth/components/modal/modal.component';
import { SearchItemComponent } from './youtube/components/search/search-item/search-item.component';
import { SearchResultsComponent } from './youtube/components/search/search-results/search-results.component';
import { HeaderComponent } from './core/components/header/header.component';
import { MainComponent } from './youtube/pages/main/main.component';
import { ModalDescriptionComponent } from './youtube/components/modal-description/modal-description.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchItemComponent,
    SearchResultsComponent,
    HeaderComponent,
    SortPipe,
    NotFoundComponent,
    ModalComponent,
    MainComponent,
    ModalDescriptionComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
