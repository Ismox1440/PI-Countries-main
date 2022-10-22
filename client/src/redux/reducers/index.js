import {GET_ACTIVITIES, ADD_COUNTRIES,  SET_COUNTRIES, SET_NAVIGATION,SET_LOADING, RESET_LOADING} from '../actions/constants'

const initialState = {
    loading: false,
    countries : [],
    activities: [],
    navigation: {
        page: 1,
        order: ['desc', 'population'],
        continent: 'all',
        activity: 'all',
        search: []
    },
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_COUNTRIES:
            return {...state, countries: action.payload};


        case SET_LOADING: 
        return {...state, loading: true};
        case RESET_LOADING: 
        return {...state, loading: false};

        case GET_ACTIVITIES:
            return {...state, activities: action.payload};

        case SET_COUNTRIES:
            return {...state, countries: action.payload};

        case SET_NAVIGATION:
            return {...state, navigation: action.payload};


        default:
            return state
    }
}

export default rootReducer