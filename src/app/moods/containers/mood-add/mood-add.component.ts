import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Mood } from 'src/app/core/models/mood';
import { MoodAdd } from 'src/app/core/store/actions/moods.actions';
import { AppState } from 'src/app/core/store/app.state';

@Component({
  selector: 'app-mood-add',
  templateUrl: './mood-add.component.html',
  styleUrls: ['./mood-add.component.scss']
})
export class MoodAddComponent implements OnInit {

  mood: Mood

  constructor(private store: Store<AppState>) {
    this.mood = new Mood()
  }

  ngOnInit() {
  }

  /**
   * Create a new mood
   */
  create(){
    this.store.dispatch(new MoodAdd(this.mood));
  }

}
