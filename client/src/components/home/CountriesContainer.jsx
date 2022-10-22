import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
import s from "./home.module.css";

const CountriesContainer = ({ countriesState = [] }) => {
  const { page} = useSelector((state) => state.navigation);

  const countriesPerPage = page === 1
      ? countriesState.slice(page - 1, page + 8)
      : countriesState.slice(page * 10 - 11, page * 10);

  return (
    <div className={s.countriesContainer}>
      {countriesPerPage.length > 0 &&
        countriesPerPage.map((country) => (
          <Card key={country.id} country={country} />
        ))}
    </div>
  );
};

export default CountriesContainer;
