import { useState, useEffect } from "react";
import { MoviesProps } from "../../../../../models/Movies";
import { useApiFetchingHook } from "../../../../../services/useApiFetchingHook";
export const useFetchingMovies = () => {
    const [fetchedMovies, setFetchedMovies] = useState<MoviesProps[]>([]);
    const [isFetchingMovies, setIsFetchingMovies] = useState(true);
    const [noMatchingMovie, setNoMatchingMovie] = useState(false);
    //for pagination
    const [page, setPageNumber] = useState(1);
    //filtering 
    const [genreFilter, setGenreFilter] = useState<number[]>([]);

    const { fetchMoviesList, fetchMoviesListFiltering } = useApiFetchingHook();
   
    //http request for getting movies list //
    async function getMoviesList() {
        const moviesList = await fetchMoviesList(page);
        const filtered = moviesList.filter((neitem: MoviesProps) => !fetchedMovies.some((item: MoviesProps) => item.id === neitem.id));
        return filtered;
    }
    //http request for new movies list by filtering//
    async function getMoviesListFiltering() {
        const moviesListFiltered = await fetchMoviesListFiltering(page, genreFilter.join(","));
        //moviesListFiltered.forEach((element)=>{console.log("eleeeeeee",element.id)});
        return moviesListFiltered;

    };
    ////handling functions
    const handleGenreFilter = () => {
        // reset  page number 
        setFetchedMovies([]);
        setPageNumber(1);

    }
    const handleEndReached = () => {
        setPageNumber(page + 1);

    }
    const fetched = async () => {
        setIsFetchingMovies(true);
        const filtered = await getMoviesList();
        setFetchedMovies((prevList: MoviesProps[]) => {
            //console.log([...prevList, ...filtered],"filteredd");
            return [...prevList, ...filtered];
        })
        setIsFetchingMovies(false);
    };
    const fetchFilteredMovies = async () => {
        setIsFetchingMovies(true);
        const filteredMovies = await getMoviesListFiltering();
        if (filteredMovies?.length == 0) {
            setIsFetchingMovies(false);
            setNoMatchingMovie(true);
        }

        else {
            const filtered = filteredMovies.filter((neitem: MoviesProps) => !fetchedMovies.some((item: MoviesProps) => item.id === neitem.id));
            setFetchedMovies((prevList)=>{return [...prevList,...filtered]});
            setIsFetchingMovies(false);
            setNoMatchingMovie(false);
        }
    }
    const handleClearFilter = () => {
        //reset genrefilter and page number
        setNoMatchingMovie(false);
        setGenreFilter([]);
        setPageNumber(1);
    }
    //it is rendered anyway and once anything of dependency list gets updated so it is rendered again
    useEffect(() => {
        //in case of filtering
        if (genreFilter.length != 0) {
            fetchFilteredMovies();
        }
        //in case of nothing
        else {
            fetched();
        }
    }, [page, genreFilter]);
    return {
        handleEndReached,
        handleGenreFilter,
        fetchedMovies,
        noMatchingMovie,
        isFetchingMovies,
        genreFilter,
        setNoMatchingMovie,
        setPageNumber,
        setGenreFilter,
        handleClearFilter
    }
}