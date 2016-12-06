import { combineReducers } from "redux";
import * as c from "../constants";


// Generic Reducers
function calendarToggleReducer(state = false, action) { switch (action.type) { case c.TOGGLE_CALENDAR: return !state; default: return state; } };
function searchToggleReducer(state = false, action) { switch (action.type) { case c.TOGGLE_SEARCH: return !state; default: return state; } };
function entryToggleReducer(state = false, action) { switch (action.type) { case c.TOGGLE_ENTRY: return !state; default: return state; } };

function searchTermReducer(state = "", action) { switch (action.type) { case c.SET_SEARCH_TERM: return action.value; default: return state; } };
function dateReducer(state = new Date(), action) {
    switch (action.type) {
        case c.SET_VALUE:
            return action.value;
        default:
            return state;
    }
}


function visibilityFilterReducer(state = c.VisibilityFilters.SHOW_ALL, action) {
    switch (action.type) {
        case c.SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
}



const context = require("../../../prototype/bookings.json");
function bookingsReducer(state = context.bookings, action) {
    switch (action.type) {
        default:
            return state;
    }
}

const appReducer = combineReducers({
    selectedDate: dateReducer,
    searchTerm: searchTermReducer,
    calendarVisible: calendarToggleReducer,
    searchVisible: searchToggleReducer,
    entryVisible: entryToggleReducer,
    visibilityFilter: visibilityFilterReducer,
    bookings: bookingsReducer
});

export default appReducer;