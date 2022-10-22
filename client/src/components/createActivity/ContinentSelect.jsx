import React from "react";

const ContinentSelect = ({ s,homeStyles,handleChange,continent,countries,}) => {
  return (
    <div className={s.continentSelect}>
      <h4>{continent}</h4>
      <select className={homeStyles.select} onChange={handleChange} name="countries">
        {countries && countries.filter((c) => c.continent === continent)
            .map((c) => { return <option key={c.name} value={c.name}>{c.name}</option>})}
      </select>
    </div>
  );
};

export default ContinentSelect;
