import axios from "axios";
const AUTH_TOKEN = "061f655549686cbe9592dc6ada554f16";
const BASE_URL = "https://api.themoviedb.org/3";
//create instance from axios then configuring defaults
// set config defaults
const instance = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: AUTH_TOKEN,
  },
});
//setting axios defults
//axios.defaults.baseURL=BASE_URL;
//axios.defaults.headers.common['Authorization']=AUTH_TOKEN;
export async function fetchMoviesGenres() {
  //axios.get('genre/movie/list');
  const response = await instance.get("genre/movie/list");
  console.log(response.data);
  const movieGenreObj = {
    genres: response.data.genres,
  };

  return movieGenreObj.genres;
}

export async function fetchTVGenres() {
  //axios.get('genre/movie/list');
  const response = await instance.get("genre/tv/list");

  console.log(response.data);

  const genreTvObj = {
    genres: response.data.genres,
  };

  return genreTvObj.genres;
}
export async function fetchMoviesListFiltering(page,with_genres) {
    //axios.get('genre/movie/list');
    const response = await instance.get("discover/movie",{
      params:{
          page:page,
          with_genres:with_genres
      }
    });
  
    const movieObj = {
      page: response.data.page,
      results: response.data.results,
      total_pages: response.data.total_pages,
      total_results: response.data.total_results,
    };
    console.log(response.data);
    return movieObj.results;
  }

export async function fetchMoviesList(page) {
  //axios.get('genre/movie/list');
  const response = await instance.get("discover/movie",{
    params:{
        page:page,
    }
  });

  const movieObj = {
    page: response.data.page,
    results: response.data.results,
    total_pages: response.data.total_pages,
    total_results: response.data.total_results,
  };
  console.log(response.data);
  return movieObj.results;
}

export async function fetchTVList() {
  //axios.get('genre/movie/list');
  const response = await instance.get("discover/tv");

  const tvObj = {
    page: response.data.page,
    results: response.data.results,
    total_pages: response.data.total_pages,
    total_results: response.data.total_results,
  };

  return tvObj.results;
}

export async function searchMovies(page,searchText){
    const response=await axios.get("search/movie",{
        baseURL:BASE_URL,
        params:{
            api_key: AUTH_TOKEN,
            query:searchText,
            page: page,
        }
    });

    return response.data.results;
}
export async function searchTV(searchText,page){
    const response=await axios.get("search/tv",{
        baseURL:BASE_URL,
        params:{
            api_key: AUTH_TOKEN,
            query:searchText,
            page: page,
        }
    });

    return response.data.results;
}

