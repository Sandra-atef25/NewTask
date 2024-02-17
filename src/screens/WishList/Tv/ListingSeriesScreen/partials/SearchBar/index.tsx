import SearchBar from "../../../../../../components/atoms/SearchText";
import { searchBarProp } from "./interface";

const SearchTextBar=({handleClearSearch,searchText,handleSearch}:searchBarProp)=>{

    return (
        <SearchBar onClearSearchHandle={handleClearSearch} searchText={searchText} setSearchText={handleSearch} />
    );
};
export default SearchTextBar;