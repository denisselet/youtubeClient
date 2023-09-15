import { NgModule, Provider } from '@angular/core';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/core.interceptor';
import { AuthService } from './../auth/services/auth.service';
import { AdminComponent } from './pages/admin/admin.component';
// import { counterReducer } from '../redux/reducers/app.reducer';
// import { StoreModule } from '@ngrx/store';


const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
};

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
    AdminComponent,
  ],
  imports: [CommonModule, BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, ReactiveFormsModule,
    // StoreModule.forRoot({ store: counterReducer }, {}),
  ],
  providers: [INTERCEPTOR_PROVIDER, AuthService]
})
export class CoreModule {}
