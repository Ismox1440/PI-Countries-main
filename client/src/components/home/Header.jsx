import React from "react";
import styles from "./home.module.css";
// ************ COMPONENTS ************
import { Link } from "react-router-dom";
import Filters from "./Filters";
import SearchBar from "./SearchBar";
import OrderButtons from "./OrderButtons";

const Header = ({ activities, setCountriesState }) => {
  return (
    <header className={styles.header}>
      <div className={styles.createContainer}>
        <Link className={styles.btnCreate} to="/create">
          + create activity
        </Link>
      </div>
      <h2 className={styles.title}>Countries</h2>
      <Filters activities={activities} />
      <SearchBar setCountriesState={setCountriesState} />
      <OrderButtons />
    </header>
  );
};

export default Header;
