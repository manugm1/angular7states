import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { MoodActionTypes, MoodGetAllSuccess, MoodGetAllError, MoodAdd, MoodAddSuccess, MoodAddError, MoodDetails, MoodDetailsSuccess, MoodDetailsError } from '../actions/moods.actions';
import { MoodsService } from '../../services/moods.service';


@Injectable()
export class MoodEffects{

    constructor(private actions$: Actions, private moodsService: MoodsService){}

    @Effect()
    getAllMoods$ = this.actions$.pipe(
        ofType(MoodActionTypes.MOOD_GET_ALL),
        mergeMap(() => this.moodsService.findAll().pipe(
            map(moods => new MoodGetAllSuccess(moods)),
            catchError((error) => [new MoodGetAllError(error)])
        ))
    )

    @Effect()
    insertMood$ = this.actions$.pipe(
        ofType(MoodActionTypes.MOOD_ADD),
        map((action: MoodAdd) => action.payload),
        mergeMap(mood => this.moodsService.insert(mood).pipe(
            map((mood) => new MoodAddSuccess(mood.id)),
            catchError((error) => [new MoodAddError(error)])
        ))
    )

    @Effect()
    getMood$ = this.actions$.pipe(
        ofType(MoodActionTypes.MOOD_DETAILS),
        map((action: MoodDetails) => action.payload),
        mergeMap(id => this.moodsService.findById(id).pipe(
            map((mood) => new MoodDetailsSuccess(mood)),
            catchError((error) => [new MoodDetailsError(error)])
        ))
    )
}