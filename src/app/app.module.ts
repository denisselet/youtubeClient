import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AuthService } from './auth/services/auth.service';

@NgModule({
  declarations: [],
  imports: [CoreModule],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
