import React from 'react';
import s from './countryPage.module.css'


const CountryDetail = ({detailName, detail}) => {
    return ( 
        <div className={`country${detailName} ${s.countryDetail}`}>
            <p className={detailName.toLowerCase()}>{detailName.toLowerCase()}</p>
            <span className={`data${detailName}`}>{detail}</span>
        </div>
     );
}
 
export default CountryDetail;