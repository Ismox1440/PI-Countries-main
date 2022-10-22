import React from 'react'
import Activity from './Activity';
import s from './countryPage.module.css'

const CountryActivities = ({activities}) => {
    return ( 
        <div className='countryActivities' >
            <h3 className={s.activitiesTitle} >Activities</h3>
            <div className={s.activitiesContainer}>
                {activities.map((activity) => <Activity activity={activity} />)}
            </div>
        </div>
     );
}
 
export default CountryActivities;