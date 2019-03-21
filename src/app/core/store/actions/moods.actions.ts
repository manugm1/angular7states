import {Action} from '@ngrx/store'
import { Mood } from '../../models/mood';


export enum MoodActionTypes {
    MOOD_GET_ALL = '[MoodLandingComponent] GetAll',
    MOOD_GET_ALL_SUCCESS = '[MoodLandingComponent] GetAll success',
    MOOD_GET_ALL_ERROR = '[MoodLandingComponent] GetAll error',

    MOOD_DETAILS = '[MoodDetailsComponent] Details',
    MOOD_DETAILS_SUCCESS = '[MoodDetailsComponent] Details success',
    MOOD_DETAILS_ERROR = '[MoodDetailsComponent] Details error',

    MOOD_ADD = '[MoodAddComponent] Add',
    MOOD_ADD_SUCCESS = '[MoodAddComponent] Add success',
    MOOD_ADD_ERROR = '[MoodAddComponent] Add error',

    MOOD_EDIT = '[MoodEditComponent] Edit',
    MOOD_EDIT_SUCCESS = '[MoodEditComponent] Edit success',
    MOOD_EDIT_ERROR = '[MoodEditComponent] Edit error',
}

/**
 * GET ALL
 */
export class MoodGetAll implements Action {
    readonly type = MoodActionTypes.MOOD_GET_ALL;
}

export class MoodGetAllSuccess implements Action {
    readonly type = MoodActionTypes.MOOD_GET_ALL_SUCCESS;
    constructor(public payload: Mood[]) {}
}

export class MoodGetAllError implements Action {
    readonly type = MoodActionTypes.MOOD_GET_ALL_ERROR;
    constructor(public payload: Error) {}
}

/**
 * DETAILS
 */
export class MoodDetails implements Action {
    readonly type = MoodActionTypes.MOOD_DETAILS;
    constructor(public payload: number) {} // id
}

export class MoodDetailsSuccess implements Action {
    readonly type = MoodActionTypes.MOOD_DETAILS_SUCCESS;
    constructor(public payload: Mood) {}
}

export class MoodDetailsError implements Action {
    readonly type = MoodActionTypes.MOOD_DETAILS_ERROR;
    constructor(public payload: Error) {}
}

/**
 * ADD
 */
export class MoodAdd implements Action {
    readonly type = MoodActionTypes.MOOD_ADD;
    constructor(public payload: Mood) {}
}

export class MoodAddSuccess implements Action {
    readonly type = MoodActionTypes.MOOD_ADD_SUCCESS;
    constructor(public payload: number) {} // id
}

export class MoodAddError implements Action {
    readonly type = MoodActionTypes.MOOD_ADD_ERROR;
    constructor(public payload: Error) {}
}

/**
 * EDIT
 */
export class MoodEdit implements Action {
    readonly type = MoodActionTypes.MOOD_EDIT;
    constructor(public payload: Mood) {}
}

export class MoodEditSuccess implements Action {
    readonly type = MoodActionTypes.MOOD_EDIT_SUCCESS;
}

export class MoodEditError implements Action {
    readonly type = MoodActionTypes.MOOD_EDIT_ERROR;
    constructor(public payload: Error) {}
}

export type MoodActions = MoodGetAll | MoodGetAllSuccess | MoodGetAllError
| MoodDetails | MoodDetailsSuccess | MoodDetailsError
| MoodAdd | MoodAddSuccess | MoodAddError
| MoodEdit | MoodEditSuccess | MoodEditError;