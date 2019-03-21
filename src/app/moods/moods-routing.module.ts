import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoodAddComponent } from './containers/mood-add/mood-add.component';
import { MoodDetailComponent } from './containers/mood-detail/mood-detail.component';
import { MoodEditComponent } from './containers/mood-edit/mood-edit.component';
import { MoodLandingComponent } from './containers/mood-landing/mood-landing.component';
import { MoodsComponent } from './moods.component';

const routes: Routes = [
  {path: '', component: MoodsComponent, children:
  [
    {path: '', component: MoodLandingComponent},
    {path: 'create', component: MoodAddComponent},
    {path: ':id', component: MoodDetailComponent},
    {path: ':id/edit', component: MoodEditComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoodsRoutingModule { }
