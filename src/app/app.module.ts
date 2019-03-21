import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import * as moodsReducer from './core/store/reducers/moods.reducer';
import { SharedModule } from './shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { MoodEffects } from './core/store/effects/moods.effects'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    AppRoutingModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreModule.forRoot({moods: moodsReducer.reducer}), // global state
    EffectsModule.forRoot([MoodEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
