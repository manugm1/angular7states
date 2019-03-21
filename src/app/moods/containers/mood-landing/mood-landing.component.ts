import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Mood } from 'src/app/core/models/mood';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/store/app.state';
import { getAllMoods } from 'src/app/core/store/reducers/moods.reducer';

@Component({
  selector: 'app-mood-landing',
  templateUrl: './mood-landing.component.html',
  styleUrls: ['./mood-landing.component.scss']
})
export class MoodLandingComponent implements OnInit {

  moods$: Observable<Mood[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    console.log("... initializing MoodLandingComponent.")

    // Invoke the selector
    this.moods$ = this.store.select(getAllMoods);
  }

}
