import React from "react";
import styles from "./home.module.css";

const ActivityFilter = ({ activities, navigation, handleChange }) => {
  return (
    <div className={styles.filter}>
      <label htmlFor="activities">activity</label>
      <select
        value={navigation.activity}
        className={styles.select}
        onChange={handleChange}
        name="activity"
      >
        <option>all</option>
        {activities.map((activity) => (
          <option key={activity.name} value={activity.name}>{activity.name}</option>
        ))}
      </select>
    </div>
  );
};

export default ActivityFilter;
