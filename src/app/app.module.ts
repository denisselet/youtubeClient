import { NgModule, isDevMode } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AuthService } from './auth/services/auth.service';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './redux/reducers/core.reducer';
import { DataEffects } from './redux/effects/core.effect';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [],
  imports: [CoreModule,
    StoreModule.forRoot({ store: appReducer }, {}),
    EffectsModule.forRoot(DataEffects),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
