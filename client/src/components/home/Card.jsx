import React from "react";
import { Link } from "react-router-dom";
import s from './home.module.css'

const Card = ({ country }) => {
  return (
    <div className={s.countryCard}  >
      <Link className={s.flagContainer} to={`/home/${country.id}`}>
        <img alt="country flag" src={country.flag}></img>
      </Link>
      <p>{country.name}</p>
      <p>{country.continent} </p>
    </div>
  );
};

export default Card;
