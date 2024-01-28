import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from './FavoritesBoolean';
//createslice :boolean name initial state reducers
export const store =configureStore({
    reducer:{
        favorites:favoriteReducer
    }
});