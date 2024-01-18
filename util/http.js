import axios from "axios";
const AUTH_TOKEN="061f655549686cbe9592dc6ada554f16";
const BASE_URL='https://api.themoviedb.org/3';
//create instance from axios then configuring defaults
// set config defaults
const instance =axios.create({
    baseURL:BASE_URL,
    params:{
        api_key:AUTH_TOKEN,
    }
});
//setting axios defults
//axios.defaults.baseURL=BASE_URL;
//axios.defaults.headers.common['Authorization']=AUTH_TOKEN;
export const fetchMoviesGenres=()=>{
    //axios.get('genre/movie/list');
    instance.get('genre/movie/list');
}
