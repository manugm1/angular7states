import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { Mood } from 'src/app/core/models/mood';
import { AppState } from 'src/app/core/store/app.state';
import { MoodDetails } from 'src/app/core/store/actions/moods.actions';
import { ActivatedRoute } from '@angular/router';
import { getMood } from 'src/app/core/store/reducers/moods.reducer';

@Component({
  selector: 'app-mood-detail',
  templateUrl: './mood-detail.component.html',
  styleUrls: ['./mood-detail.component.scss']
})
export class MoodDetailComponent implements OnInit {

  mood$: Observable<Mood>

  constructor(private store: Store<AppState>, private route: ActivatedRoute) { 
  }

  ngOnInit() {
    //First, dispatch, request the details of mood
    this.route.params.subscribe(params => {
      this.store.dispatch(new MoodDetails(params['id']));
    })

    //Second, selector of the mood details
    this.mood$ = this.store.select(getMood)
  }

}
