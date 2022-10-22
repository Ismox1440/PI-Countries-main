import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { UseFetch } from "../../hooks/useFetch";
import apiUrl from "../../API";
import s from "./countryPage.module.css";


// ########## COMPONENTS ##########
import Loading from "../loading/Loading";
import ArrowBtn from "./ArrowBtn";
import CountryActivities from "./CountryActivities";
import CountryInfo from "./CountryInfo";
// ########## COMPONENTS ##########

const CountryPage = () => {
  const history = useHistory();
  const { id } = useParams();
  const { data, loading, error } = UseFetch(apiUrl + `/countries/${id}`);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    history.push("/home");
  }

  return (
    <>
      <ArrowBtn />
      <div className={s.countryPage}>
        <h1 className={s.title}>Country</h1>
        {data && (<>
            <CountryInfo data={data} />
            <CountryActivities activities={data.activities} />
          </>)}
      </div>
    </>
  );
};

export default CountryPage;
