import { useEffect, useState } from 'react';
import { ItemData } from '../../../../../models/Genres';
import {useApiFetchingHook} from '../../../../../services/useApiFetchingHook';
//http requests for getting movies Genres////////
export const useFetchGenres=()=>{
    //set and fetch the tv genres from the given Api
    const [fetchedTvGenres, setTvGenres] = useState<ItemData[]>([]);
    const {fetchTVGenres}=useApiFetchingHook();
    async function getSeriesGenresList() {
        const seriesGenresList = await fetchTVGenres();
        return seriesGenresList;
    };
    const fetchTvSeriesGenres=async()=>{
        const seriesGenres=await getSeriesGenresList();
        setTvGenres(seriesGenres);
    }
    useEffect(() => {
        fetchTvSeriesGenres();
    }, []);
    return{
        fetchedTvGenres
    }
}
