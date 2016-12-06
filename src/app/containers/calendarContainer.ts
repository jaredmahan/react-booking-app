import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { Calendar} from "../components/Calendar/Calendar";
import moment from "moment";


const mapDispatchToProps = (dispatch) => {
    return {
        onDateChange: (date: Date): void => {
            dispatch(actions.setValue(moment(date)));
        }
    };
};

const mapStateToProps = (state) => {
    return {
        selectedDate: state.selectedDate,
        calendarVisible: state.calendarVisible,
        searchVisible: state.searchVisible
    };
};

const CalendarContainer = connect(mapStateToProps, mapDispatchToProps)(Calendar);

export default CalendarContainer;

