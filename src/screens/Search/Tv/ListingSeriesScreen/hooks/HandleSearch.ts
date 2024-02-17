import { debounce } from "lodash";
import { useCallback, useEffect, useState } from "react";
import { Keyboard } from "react-native";
import { TvProps } from "../../../../../models/Tv";
import { useApiFetchingHook } from "../../../../../services/useApiFetchingHook";
import { useFetchSeriesData } from "./HandleListingSeries";
export const useHandleSearch=()=>{
    const [searchText, setSearchText] = useState<string>("");
    //searched to see the text is searched (button searched is clicked on so we use another api)or not 
    const [searched, setSearched] = useState(false);
    //set and fetch the series of tv from the given Api
    const [fetchedSeries, setFetchedSeries] = useState<TvProps[]>([]);
    //is fetching to handle loading overlay while fetching from the backend
    const [isFetchingSeries, setIsFetchingSeries] = useState(true);
    //to chcek if there is no matching series in the given searchtext
    const [noMatchingSeries, setNoMatchingSeries] = useState(false);
    //for pagination
    const [page, setPageNumber] = useState(1);
    const {searchTV}=useApiFetchingHook();
    const {getSeriesList}=useFetchSeriesData({page,fetchedSeries});
    ///http request for searching//////
      //it is rendered anyway and once anything of dependency list gets updated so it is rendered again
    useEffect(() => {
        if (!searched) {
            fetchSeriesList();
        }
    }, [page, searched]);
    async function getSearchSeriesList() {
        setIsFetchingSeries(true);
        const searchSeriesList = await searchTV(page, searchText.trim());
        if (searchSeriesList.length === 0) {
            setIsFetchingSeries(false);
            setNoMatchingSeries(true);
        }
        else {
            const filtered = searchSeriesList.filter((newItem: TvProps) => !fetchedSeries.some((item: TvProps) => item.id === newItem.id));

            setFetchedSeries((prevList) => {
                return [...prevList, ...filtered];
            })
            setIsFetchingSeries(false);
            setNoMatchingSeries(false);
        }


    }
    
    const fetchSeriesList=async()=>{
        setIsFetchingSeries(true);
        const moviesList=await getSeriesList();
        setFetchedSeries((prevList) => {
            return [...prevList, ...moviesList];
        })

        setIsFetchingSeries(false);
        setNoMatchingSeries(false);
    }
  

    ////handling functions
    const Debounce = useCallback(
        debounce(() => {
            if (searchText?.trim()?.length === 0) {
                getSeriesList();
            }
            else {

                setFetchedSeries([]);
                getSearchSeriesList();

            }
        }, 1000),
        [page, searchText],
    );

    ////handling functions

    const handleSearch = async (text: string) => {
        setPageNumber(1);
        setSearched(true);
        setSearchText(text);
        Debounce();
        
    }

    const handleClearSearch = () => {
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
        isFetchingSeries,
        noMatchingSeries,
        fetchedSeries
    }
}