//create slice for reducre to manage a single state 
import { createSlice } from "@reduxjs/toolkit";
const MoviesSlice=createSlice({
    name:'MoviesSelected',
    initialState:{
        ids:[]
    },
    //reducers are functions used to change our state 
    reducers:{
        AddSelectedMovie:(state,action)=>{
            state.ids.push(action.payload.id);
        },
        RemoveSelectedMovie:(state,action)=>{
            state.ids.splice(action.payload.id);
        }
    }
})