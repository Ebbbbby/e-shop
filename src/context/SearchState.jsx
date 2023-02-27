import React,{useReducer} from "react";
import searchReducer from "./search-reducer";
import SearchContext from './search-context'
import { SEARCH_PRODUCTS } from "./actions";
const SearchState = (props) => {
  const initialState ={
    data:[] //{id: "123", text:"some text", complete: false}
  }
  const [state, dispatch]= useReducer(searchReducer, initialState)

  const searchText = (search)=>{
    dispatch({
      type:SEARCH_PRODUCTS,
      payload: search
    })
  }
  return (
    <SearchContext.Provider value={{search:state.data }}>
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchState;
