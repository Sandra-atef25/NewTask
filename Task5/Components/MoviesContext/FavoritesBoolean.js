import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice=createSlice({
    name:'Favorites',
    initialState:{
        favorites:false,
    },
    reducers:{
        addFavorite:(state,action)=>{
            state.favorites=!state.favorites;

        },
        removeFavorite:(state,action)=>{
         state.favorites=!state.favorites;
        }
    }
}) 
export const getFavorite=favoriteSlice.actions.addFavorite;
export const removeFavorite = favoriteSlice.actions.removeFavorite;
export default favoriteSlice.reducer;