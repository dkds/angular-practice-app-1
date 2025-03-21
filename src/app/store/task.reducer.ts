import { createReducer } from "@ngrx/store";

const initialState = {
    tasks: []
};

export const taskReducer = createReducer(initialState);