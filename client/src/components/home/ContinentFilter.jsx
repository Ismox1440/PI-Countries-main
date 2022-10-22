import React from 'react'
import styles from "./home.module.css";

const ContinentFilter = ({navigation, handleChange}) => {
    return ( 
        <div className={styles.filter}>
          <label htmlFor="continent">continent</label>
          <select
            value={navigation.continent}
            className={styles.select}
            onChange={handleChange}
            name="continent"
          >
            <option value="all">all</option>
            <option value="Asia">Asia</option>
            <option value="Africa">Africa</option>
            <option value="Antarctica">Antarctica</option>
            <option value="North America">North America</option>
            <option value="South America">South America</option>
            <option value="Oceania">Oceania</option>
            <option value="Europe">Europe</option>
          </select>
        </div>
     );
}
 
export default ContinentFilter;