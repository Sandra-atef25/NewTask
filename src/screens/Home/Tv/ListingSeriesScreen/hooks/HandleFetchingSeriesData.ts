import { useState, useEffect } from "react";
import { TvProps } from "../../../../../models/Tv";
import { useApiFetchingHook } from "../../../../../services/useApiFetchingHook";
export const useFetchingSeriesData = () => {
  //set and fetch the series of tv from the given Api
  const [fetchedSeries, setFetchedSeries] = useState<TvProps[]>([]);

  //is fetching to handle loading overlay while fetching from the backend
  const [isFetchingSeries, setIsFetchingSeries] = useState(true);

  //to chcek if there is no matching series in the given searchtext
  const [noMatchingSeries, setNoMatchingSeries] = useState(false);
  //filtering
  const [genreFilter, setGenreFilter] = useState<number[]>([]);
  //for pagination
  const [page, setPageNumber] = useState(1);

  const { fetchTVList, fetchTVListFiltering } = useApiFetchingHook();
  //http request for getting series list //
  async function getSeriesList() {
    const seriesList = await fetchTVList(page);
    const filtered = seriesList.filter(
      (newItem: TvProps) =>
        !fetchedSeries.some((item: TvProps) => item.id === newItem.id)
    );
    return filtered;
  }
  //http request for new seies list by filtering//
  async function getSeriesListFiltering() {
    const seriesListFiltered = await fetchTVListFiltering(
      page,
      genreFilter.join(",")
    );
    return seriesListFiltered;
  }
  const fetched = async () => {
    setIsFetchingSeries(true);
    const filtered = await getSeriesList();
    setFetchedSeries((prevList: TvProps[]) => {
      return [...prevList, ...filtered];
    });
    setIsFetchingSeries(false);
  };
  const fetchFilteredSeries = async () => {
    setIsFetchingSeries(true);
    const filteredSeries = await getSeriesListFiltering();
    if (filteredSeries?.length == 0) {
      setIsFetchingSeries(false);
      setNoMatchingSeries(true);
    } else {
      const filtered = filteredSeries.filter(
        (neitem: TvProps) =>
          !fetchedSeries.some((item: TvProps) => item.id === neitem.id)
      );
      setFetchedSeries(filtered);
      setIsFetchingSeries(false);
      setNoMatchingSeries(false);
    }
  };

  ////handling functions
  const handleGenreFilter = () => {
    // reset  page number
    setFetchedSeries([]);
    setPageNumber(1);
  };
  const handleEndReached = () => {
    if (!isFetchingSeries) {
      setPageNumber(page + 1);
    }
  };
  const handleClearFilter = () => {
    //reset genrefilter and page number
    setNoMatchingSeries(false);
    setGenreFilter([]);
    setPageNumber(1);
  };
  //it is rendered anyway and once anything of dependency list gets updated so it is rendered again
  useEffect(() => {
    //in case of filtering
    if (genreFilter.length != 0) {
      fetchFilteredSeries();
    }
    //in case of nothing
    else {
      fetched();
    }
  }, [page, genreFilter]);
  return {
    handleEndReached,
    handleGenreFilter,
    handleClearFilter,
    fetchedSeries,
    noMatchingSeries,
    isFetchingSeries,
    genreFilter,
    setNoMatchingSeries,
    setPageNumber,
    setGenreFilter
  };
};
