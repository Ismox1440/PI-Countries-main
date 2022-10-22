import React from "react";
import styles from "./home.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setNavigation } from "../../redux/actions";
import ContinentFilter from "./ContinentFilter";
import ActivityFilter from "./ActivityFilter";

const Filters = ({activities}) => {
  const navigation = useSelector((state) => state.navigation);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setNavigation({ ...navigation, page: 1, [name]: value }));
  };

  return (
      <div className={styles.filtersContainer}>
        <ContinentFilter handleChange={handleChange} navigation={navigation} />
        <ActivityFilter handleChange={handleChange}  activities={activities} navigation={navigation}/>
      </div>
  );
};

export default Filters;
