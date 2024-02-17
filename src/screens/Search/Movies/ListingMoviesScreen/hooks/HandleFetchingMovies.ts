import { MoviesProps } from "../../../../../models/Movies";
import { useApiFetchingHook } from "../../../../../services/useApiFetchingHook";
import { asyncStorageProps } from "./interface/interfaceAsyncStorage";

export const useFetchMoviesData=({page,fetchedMovies}:asyncStorageProps)=>{
    const {fetchMoviesList}=useApiFetchingHook();
    //http request for getting movies list //
    async function getMoviesList() {
        const moviesList = await fetchMoviesList(page);
        const filtered = moviesList.filter((neitem: MoviesProps) => !fetchedMovies.some((item: MoviesProps) => item.id === neitem.id));
        return filtered;

    }
    return {
        getMoviesList
    }
}