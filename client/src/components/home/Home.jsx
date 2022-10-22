import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import apiUrl from "../../API";
import { getActivities, addCountries } from "../../redux/actions";
import styles from "./home.module.css";

// ############# COMPONENTES #############
import CountriesContainer from "./CountriesContainer";
import HeroButtons from "./HeroButtons";
import Loading from "../loading/Loading";
import Header from "./Header";
// ############# COMPONENTES #############

const Home = () => {
  
  //redux store and dispatch
  const { order, page, continent, activity, search } = useSelector((state) => state.navigation);
    const countries = useSelector((state) => state.countries);
    const activities = useSelector((state) => state.activities);
    const loading = useSelector((state) => state.loading);
    const dispatch = useDispatch();
    const [countriesState, setCountriesState] = useState([]);


  useEffect(() => {
      if(activities.length < 1) dispatch(getActivities(apiUrl));
      if(countries.length < 1)dispatch(addCountries(apiUrl));
  }, [dispatch]);

  useEffect(() => {
    let newCountries = search.length > 0 ?  [...search]  : [...countries];

    const continentFilter = (countries, continent) => countries.filter((c) => c.continent === continent);
    const activityFilter = (activity, search) => {
      if(search.length === 0) return activities.find((a) => a.name === activity).countries;
      return newCountries.filter(c => c.activities.find(a => a.name === activity))
    }

    if (continent === "all" && activity !== "all") newCountries = activityFilter(activity, search);
    else if (continent !== "all" && activity === "all") newCountries = continentFilter(newCountries, continent);
    else if (continent !== "all" && activity !== "all") newCountries = continentFilter(activityFilter(activity, search), continent);

    if (order[1] === "population") newCountries.sort((a,b) => a.population > b.population ? 1 : -1);
    else newCountries.sort((a, b) => a.name.localeCompare(b.name));
    
    if (order[0] === "desc") newCountries.reverse();

    setCountriesState(newCountries);
  }, [continent, activity, order, countries, activities, search]);

  return (
    <div className={styles.homeContainer}>
      <Header activities={activities} setCountriesState={setCountriesState} />
      <main className={styles.main}>
        <HeroButtons page={page} countriesState={countriesState} />
        {loading ? <Loading /> : <CountriesContainer countriesState={countriesState} />}
      </main>
    </div>
  );
};

export default Home;
