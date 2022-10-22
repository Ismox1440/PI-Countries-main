import axios from "axios"
import {ADD_COUNTRIES, GET_ACTIVITIES, SET_COUNTRIES, SET_NAVIGATION, SET_COUNTRIES_CONTROLLED, SET_LOADING, RESET_LOADING} from './constants'


export function setLoading() {
    return {type: SET_LOADING}
}
export function resetLoading() {
    return {type: RESET_LOADING}
}

export function addCountries(apiUrl) {
    return function(dispatch) {
        dispatch(setLoading())
        axios.get(apiUrl + '/countries')
            .then(response => dispatch({type: ADD_COUNTRIES, payload: response.data}))
            .catch(() => dispatch({type: ADD_COUNTRIES, payload: []}))
            .finally(() => dispatch(resetLoading()))
    }   
}


export function getActivities(apiUrl) {
    return function(dispatch) {
        axios.get(apiUrl + '/activities')
            .then(response => dispatch({type: GET_ACTIVITIES, payload: response.data}))
            .catch(res => dispatch({type: GET_ACTIVITIES, payload: []}))
    }
}

export function setCountries(countries) {
    return {type: SET_COUNTRIES, payload: countries}
}

export function setNavigation(navigation) {
    return {type: SET_NAVIGATION, payload: navigation}
}

export function setCountriesControlled(countries) {
    return {type: SET_COUNTRIES_CONTROLLED, payload: countries}
}

