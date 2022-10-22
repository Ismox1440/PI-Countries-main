import axios from "axios";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import apiUrl from "../../API";
import { resetLoading, setLoading, setNavigation } from "../../redux/actions";
import s from "./home.module.css";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch()
  const navigation = useSelector(state => state.navigation)

  const handleSubmit = (e) => {
    e.preventDefault();
    if(searchInput.length === 0) return dispatch(setNavigation({...navigation, search: []}))
     else {
      dispatch(setLoading())
      axios.get(apiUrl + `/countries?name=${searchInput}`)
           .then(res => dispatch(setNavigation({...navigation, search: res.data})))
           .catch(() => alert('the country was not found'))
           .finally(() => dispatch(resetLoading()))
          }
  };

  return (
    <form className={s.searchContainer} onSubmit={handleSubmit} action="">
      <input
        className={s.searchBar}
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        type="text"
      />
    </form>
  );
};

export default SearchBar;
