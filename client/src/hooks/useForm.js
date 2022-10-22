import axios from "axios";
import { useState } from "react";
import apiUrl from "../API";

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    const {name, value} = e.target
    if(name === 'countries') {
        if(form.countries.filter(c => c.id === value).length > 0) return
        setForm({...form, [name]: [...form.countries, {id: value} ]})
        return setErrors(validateForm(form))
    }

    if(name === 'deleteCountry') {
        setForm({...form, countries: form.countries.filter(c => c.id !== value)})
        return setErrors(validateForm(form))    
    }
    setForm({...form,[name]: value})
  };


  const handleBlur = (e) => {
    handleChange(e)
    setErrors(validateForm(form))
  };

  
  const handleSubmit =  async (e) => {
    e.preventDefault()
    setErrors(  validateForm(form))
    if(Object.keys(validateForm(form)).length === 0) {
      setLoading(true)
        const {name, difficulty, duration, season, countries} = form
            axios.post(apiUrl + `/activities`, {
                name,difficulty,duration,season, countries: countries.map(c => c.id)
            })
            .then(res => {
                setResponse(res.data.message)
                setTimeout(() => setResponse(null),5000)
            })
            .catch(res => {
                setErrors({postError: res.response.data.error})
            }).finally(() => setLoading(false))
    }
  };

  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
