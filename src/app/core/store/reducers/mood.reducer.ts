import { MoodActionTypes, MoodActions } from '../actions/mood.actions';
import { Mood } from '../../models/mood';

export interface State{
    data: Mood[];
    selected: Mood;
    action: string,
    done: boolean,
    error?: Error
}

const initialState : State = {
    data: [],
    selected: null,
    action: null,
    done: false,
    error: null
}

export function reducer(state = initialState, action: MoodActions): State{
    console.log('Action: ', action);
    switch (action.type) {
        /**
         * GET ALL
         */
        case MoodActionTypes.MOOD_GET_ALL:
            return {
                ...state,
                action: MoodActionTypes.MOOD_GET_ALL,
                done: false,
                selected: null,
                error: null
            };
        case MoodActionTypes.MOOD_GET_ALL_SUCCESS:
            return {
                ...state,
                data: action.payload,
                done: true,
                selected: null,
                error: null
            };
        case MoodActionTypes.MOOD_GET_ALL_ERROR:
            return {
                ...state,
                done: true,
                selected: null,
                error: action.payload
            };

        /**
        * DETAILS
        */
        case MoodActionTypes.MOOD_DETAILS:
            return {
                ...state,
                action: MoodActionTypes.MOOD_DETAILS,
                done: false,
                selected: null,
                error: null
            };
        case MoodActionTypes.MOOD_DETAILS_SUCCESS:
            return {
                ...state,
                selected: action.payload,
                done: true,
                error: null
            };
        case MoodActionTypes.MOOD_DETAILS_ERROR:
            return {
                ...state,
                done: true,
                selected: null,
                error: action.payload
            };

        /**
        * ADD
        */
       case MoodActionTypes.MOOD_ADD:
            return {
                ...state,
                action: MoodActionTypes.MOOD_ADD,
                done: false,
                selected: action.payload,
                error: null
            };
        case MoodActionTypes.MOOD_ADD_SUCCESS:
            return {
                ...state,
                data: [...state.data, {...state.selected, id: action.payload}],
                selected: null,
                done: true,
                error: null
            };
        case MoodActionTypes.MOOD_ADD_ERROR:
            return {
                ...state,
                done: true,
                selected: null,
                error: action.payload
            };
        default:
            return state;
    }
}