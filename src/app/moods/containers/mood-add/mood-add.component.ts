import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Mood } from 'src/app/core/models/mood';
import { MoodAdd } from 'src/app/core/store/actions/mood.actions';

@Component({
  selector: 'app-mood-add',
  templateUrl: './mood-add.component.html',
  styleUrls: ['./mood-add.component.scss']
})
export class MoodAddComponent implements OnInit {

  mood: Mood

  constructor(private store: Store<Mood>) {
     this.mood = new Mood()
  }

  ngOnInit() {
  }

  create(){
    this.store.dispatch(new MoodAdd(this.mood))
  }

}
