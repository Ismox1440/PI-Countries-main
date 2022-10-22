import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setNavigation } from "../../redux/actions";
import s from "./home.module.css";

const HeroButtons = ({ page, countriesState }) => {
  const navigation = useSelector((state) => state.navigation);
  const dispatch = useDispatch();

  const pageHandler = (e) => {
    const {id} = e.target
    const newPage = id === 'btnNext' ? page + 1 : page - 1
    dispatch(setNavigation({...navigation,page: newPage})
    );
  };

 
  

  const buttonsPages = () => {
    let arrPages = [page];
    const pageMax = Math.ceil(countriesState.length / 10)

    arrPages = page - 2 > 0 
    ? [page - 2, page - 1, ...arrPages]
    : page - 1 > 0 ? [page - 1, ...arrPages]
    : arrPages

    arrPages = page + 2 <= pageMax 
    ? [...arrPages, page + 1, page + 2]
    : page + 1 <= pageMax ? [...arrPages, page + 1] 
    : arrPages

    return arrPages.map((p) => (
      <button key={p} className={s.heroButtons} id={s.HeroButtonsNumber} onClick={() => dispatch(setNavigation({ ...navigation, page: p }))} disabled={page === p}>{p}</button>
    ));
  };

  return (
    <div className={s.heroButtonsContainer}>
      <button className={s.heroButtons} disabled={page - 1 <= 0} id="btnPrev" onClick={pageHandler} >prev</button>
      {buttonsPages()}
      <button className={s.heroButtons} disabled={page * 10 + 1 >= countriesState.length} id="btnNext" onClick={pageHandler}>next</button>
    </div>
  );
};

export default HeroButtons;
