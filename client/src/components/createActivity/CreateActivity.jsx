import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import apiUrl from "../../API";
import { addCountries} from "../../redux/actions";
import s from './CreateActivity.module.css'

/* ############ COMPONENTS ############ */
import Form from "./Form";
import arrow from '../../assets/images/arrow-izq.png'
import countryPageStyles from '../countryPage/countryPage.module.css'
import Loading from "../loading/Loading";
/* ############ COMPONENTS ############ */

const CreateActivity = () => {
    const countries = useSelector(s => s.countries)
    const loading = useSelector(s => s.loading)
    const dispatch = useDispatch()
    
    
    useEffect(() => {
      if(countries.length < 1) dispatch(addCountries(apiUrl))
    },[dispatch])
    
  return (
    <>
        <Link to='/home'>
        <img className={countryPageStyles.arrow} src={arrow} alt="arrow" />
        </Link>
      <h1 className={s.title}>Create Activity</h1>
      <div className="formCreate">
    
        {loading ? <Loading /> : <Form countries={countries} />}
      </div>
    </>
  );
};

export default CreateActivity;
