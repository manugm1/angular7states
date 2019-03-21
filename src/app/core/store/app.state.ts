import  * as fromMoods from './reducers/moods.reducer';

/**
 * States of App
 */
export interface AppState{
    moods: fromMoods.MoodState;
}