import SearchListContext from '../context/SearchList_Context'

const SearchListProvider = ({ children }) => {
    return <SearchListContext.Provider>{children}</SearchListContext.Provider>
}

export default SearchListProvider
