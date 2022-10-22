import React from "react";
import ActivityDetail from "./ActivityDetail";
import s from './countryPage.module.css'

const Activity = ({ activity }) => {
  return (
    <div className={s.activity} id={activity.id}>
      <ActivityDetail activity={activity} detail={'name'} />
      <ActivityDetail activity={activity} detail={'difficulty'} />
      <ActivityDetail activity={activity} detail={'duration'} />
      <ActivityDetail activity={activity} detail={'season'} />
    </div>
  );
};

export default Activity;
