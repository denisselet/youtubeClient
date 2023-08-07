import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { ModalDescriptionComponent } from './pages/description/description.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: ':selectedId', component: ModalDescriptionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YoutubeRoutingModule { }
