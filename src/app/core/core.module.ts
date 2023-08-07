import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchItemComponent } from '../youtube/components/search/search-item/search-item.component';
import { SortPipe } from '../youtube/pipes/sort.pipe';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SearchResultsComponent } from '../youtube/components/search/search-results/search-results.component';
import { LoginComponent } from '../auth/pages/login/login.component';
import { MainComponent } from '../youtube/pages/main/main.component';
import { ModalDescriptionComponent } from '../youtube/pages/description/description.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    SearchItemComponent,
    SearchResultsComponent,
    HeaderComponent,
    SortPipe,
    NotFoundComponent,
    LoginComponent,
    MainComponent,
    ModalDescriptionComponent,
  ],
  imports: [CommonModule, BrowserModule, AppRoutingModule, FormsModule],
})
export class CoreModule {}
