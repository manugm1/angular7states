import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { Mood } from 'src/app/core/models/mood';

@Component({
  selector: 'app-mood-detail',
  templateUrl: './mood-detail.component.html',
  styleUrls: ['./mood-detail.component.scss']
})
export class MoodDetailComponent implements OnInit {

  mood$: Observable<Mood>

  constructor(private store: Store<Mood>) { 
    this.mood$ = this.store.pipe(select('mood'));
  }

  ngOnInit() {
    
  }

}
