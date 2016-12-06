import * as c from "../constants";

export const toggleCalendar = () => { return { type: c.TOGGLE_CALENDAR }; };
export const toggleSearch = () => { return { type: c.TOGGLE_SEARCH }; };
export const toggleEntry = () => { return { type: c.TOGGLE_ENTRY }; };
export const setValue = (value: any) => { return { type: c.SET_VALUE, value: value }; };
export const setSearchTerm = (value: any) => { return { type: c.SET_SEARCH_TERM, value: value }; };
export const setVisibilityFilter = (filter) => { return { type: c.SET_VISIBILITY_FILTER, filter }; };