import React from "react";
import { useForm } from "../../hooks/useForm";
import s from "./CreateActivity.module.css";
import homeStyles from "../home/home.module.css";
import Loading from "../loading/Loading";
import ContinentSelect from "./ContinentSelect";

const initialForm = {
  name: "",
  duration: "",
  countries: [],
  difficulty: 1,
  season: "Verano",
};

const validateForm = (form) => {
  const errors = {};
  if (!form.name.trim()) errors.name = "name is needed";
  else if (form.name.length < 3) errors.name = "a minimum of 3 letters is needed for the name";
  else if (form.name.length > 16) errors.name = "The name must have a maximum of 16 letters";
  if (form.countries.length < 1) errors.countries = "country is needed";
  if(form.duration.length < 1) errors.duration = "duration is needed"

  return errors;
};

const Form = ({ countries }) => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleSubmit,
    handleBlur,
  } = useForm(initialForm, validateForm);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className={s.formContainer}>
      <form className={s.form} onSubmit={handleSubmit} action="">
        <div className={s.firstSection}>
          <div className={s.inputContainer}>
            <h3 htmlFor="name">name</h3>
            <input
              className={homeStyles.searchBar}
              value={form.name}
              onBlur={handleBlur}
              onChange={handleChange}
              name="name"
              type="text"
            />
            {errors.name && <p className={s.error}>{errors.name}</p>}
          </div>
           <div className={s.inputContainer}>
            <h3 htmlFor="duration">duration</h3>
            <input
              className={homeStyles.searchBar}
              value={form.duration}
              onBlur={handleBlur}
              onChange={handleChange}
              name="duration"
              type="text"
            />
            {errors.duration && <p className={s.error}>{errors.duration}</p>}
          </div>
          <div className={s.inputSelectContainer}>
          <div className={s.inputContainer}>
            <h3 name="difficulty" htmlFor="name">
              difficulty
            </h3>
            <select
              className={homeStyles.select}
              value={form.difficulty}
              onBlur={handleBlur}
              onChange={handleChange}
              name="difficulty"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>  
          <div className={s.inputContainer}>
            <h3 htmlFor="season">season</h3>
            <select
              className={homeStyles.select}
              value={form.season}
              onBlur={handleBlur}
              onChange={handleChange}
              name="season"
              id=""
            >
              <option value="summer">summer</option>
              <option value="fall">fall</option>
              <option value="winter">winter</option>
              <option value="spring">spring</option>
            </select>
          </div>

          </div>
        </div>

        <div>
          <h3 className={s.countriesTitle} htmlFor="countries">countries</h3>
          <div className={s.continentsContainer}>
            <ContinentSelect s={s} homeStyles={homeStyles} continent={'Europe'} countries={countries} handleChange={handleChange} />
            <ContinentSelect s={s} homeStyles={homeStyles} continent={'Asia'} countries={countries} handleChange={handleChange} />
            <ContinentSelect s={s} homeStyles={homeStyles} continent={'Africa'} countries={countries} handleChange={handleChange} />
            <ContinentSelect s={s} homeStyles={homeStyles} continent={'Antarctica'} countries={countries} handleChange={handleChange} />
            <ContinentSelect s={s} homeStyles={homeStyles} continent={'North America'} countries={countries} handleChange={handleChange} />
            <ContinentSelect s={s} homeStyles={homeStyles} continent={'South America'} countries={countries} handleChange={handleChange} />
            <ContinentSelect s={s} homeStyles={homeStyles} continent={'Oceania'} countries={countries} handleChange={handleChange} />
          </div>
          {errors.countries && <p className={s.error}>{errors.countries}</p>}
        </div>
        <div className={s.btnContainer}>
          <input className={s.btnCreate} type="submit" value="create" />
        </div>
        {errors.postError && <p className={s.error}>{errors.postError}</p>}
        {response && <p className={s.response}>{response}</p>}
      </form>
      <div className={s.btnCountryContainer}>
        {form.countries.length > 0 &&
          form.countries.map((c) => (
            <button
              className={s.btnCountry}
              onClick={(e) =>
                handleChange({
                  target: { name: "deleteCountry", value: e.target.id },
                })
              }
              id={c.id}
            >
              {c.id}
            </button>
          ))}
      </div>
    </div>
  );
};

export default Form;
