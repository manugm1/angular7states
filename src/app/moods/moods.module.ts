import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MoodsRoutingModule } from './moods-routing.module';
import { MoodLandingComponent } from './containers/mood-landing/mood-landing.component';
import { MoodAddComponent } from './containers/mood-add/mood-add.component';
import { MoodDetailComponent } from './containers/mood-detail/mood-detail.component';
import { MoodEditComponent } from './containers/mood-edit/mood-edit.component';
import { MoodsComponent } from './moods.component';

@NgModule({
  // Components in declarations are necessary for lazy loading only MoodsModule
  declarations: [MoodsComponent, MoodAddComponent, MoodDetailComponent, MoodEditComponent, MoodLandingComponent],
  imports: [
    CommonModule,
    FormsModule,
    MoodsRoutingModule,
  ]
})
export class MoodsModule { }
