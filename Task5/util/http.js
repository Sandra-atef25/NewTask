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
const baseOptions = instance.defaults.params;
//setting axios defults
//axios.defaults.baseURL=BASE_URL;
//axios.defaults.headers.common['Authorization']=AUTH_TOKEN;
export async function fetchMoviesGenres() {
  //axios.get('genre/movie/list');
  const response = await instance.get("genre/movie/list");
  const movieGenreObj = {
    genres: response.data.genres,
  };

  return movieGenreObj.genres;
}

export async function fetchTVGenres() {
  //axios.get('genre/movie/list');
  const response = await instance.get("genre/tv/list");

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
  return movieObj.results;
}
export async function fetchTVListFiltering(page,with_genres) {
    //axios.get('genre/movie/list');
    const response = await instance.get("discover/tv",{
      params:{
          page:page,
          with_genres:with_genres,
      }
    });
  
    const tvObj = {
      page: response.data.page,
      results: response.data.results,
      total_pages: response.data.total_pages,
      total_results: response.data.total_results,
    };
  
    return tvObj.results;
  }
export async function fetchTVList(page) {
  //axios.get('genre/movie/list');
  const response = await instance.get("discover/tv",{
    params:{
        page:page,
    }
  });

  const tvObj = {
    page: response.data.page,
    results: response.data.results,
    total_pages: response.data.total_pages,
    total_results: response.data.total_results,
  };

  return tvObj.results;
}

export async function searchMovies(page,searchText){
    const response=await instance.get("search/movie",{
        params:{
            ...baseOptions,
            query:searchText,
            page: page,
        }
    });

    return response.data.results;
}
export async function searchTV(page,searchText){
    const response=await instance.get("search/tv",{
        
        params:{
            ...baseOptions,
            query:searchText,
            page: page,
        }
    });

    return response.data.results;
}

