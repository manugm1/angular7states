import { Component, OnInit } from '@angular/core';
import { AppState } from '../core/store/app.state';
import { MoodGetAll } from '../core/store/actions/moods.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-mood',
  template: `<router-outlet></router-outlet>`, //childs
  styleUrls: ['./moods.component.scss']
})
export class MoodsComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    console.log('... Initializing Moods component');

    // TODO: centralize the CRUD operations for Success and Fails actions
    this.store.dispatch(new MoodGetAll());
  }

}
