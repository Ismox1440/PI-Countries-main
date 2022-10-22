import React from "react";
import s from './countryPage.module.css'
import arrow from '../../assets/images/arrow-izq.png'
import { useHistory } from "react-router-dom";
const ArrowBtn = () => {  
  const history  = useHistory()

  return (
    <a href="" onClick={() => history.push('/home')} className={s.arrowContainer} >
      <img className={s.arrow} src={arrow} alt="arrow" />
    </a>
   
  );
};

export default ArrowBtn;
