import { useEffect, useState } from 'react';
import { ItemData } from '../../../../../models/Genres';
import { useApiFetchingHook } from '../../../../../services/useApiFetchingHook';
//http requests for getting movies Genres////////
export const useFetchGenres = () => {
    const { fetchMoviesGenres } = useApiFetchingHook();
    const [fetchedMoviesGenres, setFetchedMoviesGenres] = useState<ItemData[]>()
    const getMoviesGenresList = async () => {
        const moviesGenresList = await fetchMoviesGenres();
        return moviesGenresList;
    };
   
    const getFetchedGenres = async () => {
        const fetchedMoviesGenres = await getMoviesGenresList();
        setFetchedMoviesGenres(fetchedMoviesGenres);
    };
    useEffect(() => {
        getFetchedGenres();
    }, []);
    return {
        fetchedMoviesGenres,
    }
}
