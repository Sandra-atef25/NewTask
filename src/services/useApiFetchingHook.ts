import { Int32 } from "react-native/Libraries/Types/CodegenTypes";
import { fetchData } from "../utils/HttpRequests";

//this function used to fetch the Series Genres from Backend
export const useApiFetchingHook=()=>{
    const fetchTVGenres = async () => {
        const response = await fetchData("genre/tv/list");
        return response.genres;
    };
    const fetchMoviesGenres = async () => {
        const response = await fetchData("genre/movie/list");
        return response.genres;
    };
    //this function for fetching movies list from backend with selected genres from frontend
    const fetchMoviesListFiltering = async (page: number, with_genres: string) => {
        const response = await fetchData("discover/movie", {
            params: {
                page: page,
                with_genres: with_genres,
            },
        });
        response.results.every((item)=>{console.log("filtering",item.genre_ids)});
        return response.results;
    };
    
    //this function used to fetch the movies list based on page
    const fetchMoviesList = async (page: number) => {
        const response = await fetchData("discover/movie", {
            params:{
                page:page,

            }
        });
        return response.results;
    };
    
    //this function used to fetch the list of series from backend with selected genres from frontend
    const fetchTVListFiltering = async (page: number, with_genres: string) => {
        const response = await fetchData("discover/tv", {
            params: {
                page: page,
                with_genres: with_genres,
            },
        });
        return response.results;
    };
    
    //this function used to fetch the list of series from backend based on page
    const fetchTVList = async (page: number) => {
        const response = await fetchData("discover/tv", {
            params: {
                page: page,
            },
        });
        return response.results;
    };
    
    //this function used to fetch the movies from backend that matches the search text from frontend
    const searchMovies = async (page: number, searchText: string) => {
        const response = await fetchData("search/movie", {
            params: {
                query: searchText,
                page: page,
            },
        });
    
        return response.results;
    };
    
    //this function used to fetch the series from backend matching the search text from frontend
    const searchTV = async (page: number, searchText: string) => {
        const response = await fetchData("search/tv", {
            params: {
                query: searchText,
                page: page,
            },
        });
    
        return response.results;
    };
    return {
        fetchMoviesGenres,
        fetchMoviesList,
        fetchMoviesListFiltering,
        fetchTVGenres,
        fetchTVList,
        fetchTVListFiltering,
        searchMovies,
        searchTV
    }
}
