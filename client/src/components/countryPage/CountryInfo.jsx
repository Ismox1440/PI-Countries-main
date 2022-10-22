import React from "react";
import CountryDetail from "./CountryDetail";
import s from './countryPage.module.css'

const CountryInfo = ({data}) => {
  return (
    <div className={ s.countryInfo}>
      <div className={s.countryData}>
        <CountryDetail detailName={'Name'} detail={data.name} />
        <CountryDetail detailName={'Continent'} detail={data.continent} />
        <CountryDetail detailName={'Area'} detail={data.area} />
        <CountryDetail detailName={'Subregion'} detail={data.subregion} />
        <CountryDetail detailName={'Population'} detail={data.population} />
        <CountryDetail detailName={'Id'} detail={data.id} />
      </div>
      <div className="countryImage">
        <img src={data.flag} alt="" />
      </div>
    </div>
  );
};

export default CountryInfo;
