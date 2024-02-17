import { debounce } from "lodash";
import { useCallback, useEffect, useState } from "react";
import { Keyboard } from "react-native";
import { MoviesProps } from "../../../../../models/Movies";
import { useApiFetchingHook } from "../../../../../services/useApiFetchingHook";
import { useFetchMoviesData } from "./HandleFetchingMovies";

export const useHandleSearch=()=>{
    const [searchText, setSearchText] = useState<string>('');
    const [searched, setSearched] = useState(false);
    const [fetchedMovies, setFetchedMovies] = useState<MoviesProps[]>([]);
    const [isFetchingMovies, setIsFetchingMovies] = useState(true);
    const [noMatchingMovie, setNoMatchingMovie] = useState(false);
    //for pagination
    const [page, setPageNumber] = useState(1);

    const {searchMovies}=useApiFetchingHook();
    const {getMoviesList}=useFetchMoviesData({page,fetchedMovies});
    ///http request for searching//////
    async function getSearchMoviesList() {
        setIsFetchingMovies(true);
        const searchMoviesList = await searchMovies(page, searchText?.trim()?.toString());
        if (searchMoviesList?.length == 0) {
            setIsFetchingMovies(false);
            setNoMatchingMovie(true);
        }
        else {
            const filtered = searchMoviesList.filter((neitem: MoviesProps) => !fetchedMovies.some((item: MoviesProps) => item.id === neitem.id));
            setFetchedMovies((prevList) => {
                return [...prevList, ...filtered];
            })
            setIsFetchingMovies(false);
            setNoMatchingMovie(false);
        }

    }
    const fetchMoviesList=async()=>{
        setIsFetchingMovies(true);
        const moviesList=await getMoviesList();
        setFetchedMovies((prevList) => {
            return [...prevList, ...moviesList];
        })

        setIsFetchingMovies(false);
        setNoMatchingMovie(false);
    }
    //it is rendered anyway and once anything of dependency list gets updated so it is rendered again
    useEffect(() => {
        //in case of nothing
        if (!searched) {
            fetchMoviesList();
        }
    }, [page, searched]);

    ////handling functions
    const Debounce = useCallback(
        debounce(() => {
            if (searchText?.trim()?.length === 0) {
                getMoviesList();
            }
            else {
                setFetchedMovies([]);
                getSearchMoviesList();
            }
        }, 1000),
        [page, searchText],
    );
    const handleSearch = async (text: string) => {
        setPageNumber(1);
        setSearchText(text);
        setSearched(true);
        Debounce();
    }

    const handleClearSearch = () => {
        //reset searchQuery and page number clearing search
        setSearchText('');
        setPageNumber(1);
        setSearched(false);
        Keyboard.dismiss();

    }

    const handleEndReached = () => {
        setPageNumber(page+1);
    }
    return{
        handleEndReached,
        handleClearSearch,
        handleSearch,
        searchText,
        isFetchingMovies,
        noMatchingMovie,
        fetchedMovies
    }
}