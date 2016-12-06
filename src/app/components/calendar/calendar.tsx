import RcCalendar from "rc-calendar";
import React from "react";
import moment from "moment";

import scrolling from "../../helpers/scrolling";

import "rc-calendar/assets/index.css";
import "./calendar.css";

interface CalendarProps extends React.Props<any> {
    selectedDate: Date;
    calendarVisible: boolean;
    searchVisible: boolean;
    entryVisible: boolean;
    onDateChange: (date: Date) => void;
}
export class Calendar extends React.Component<CalendarProps, void> {
    render() {
        let showCalendar = this.showCalendar();
        return <div className="calendar">
            <RcCalendar style={{ width: "100%" }}
                defaultValue={moment(this.props.selectedDate)}
                value={moment(this.props.selectedDate)}
                showToday={false}
                className={showCalendar ? "calendar-open" : "calendar-closed"}
                onSelect={(d) => this.dateSelected(d)}
                onChange={(d) => this.dateSelected(d)} />
        </div>;
    }
    dateSelected(date) {
        this.props.onDateChange(date);
        scrolling.scrollToDate(date);
    }
    showCalendar() {
        if (this.props.searchVisible || this.props.entryVisible) return false;
        return this.props.calendarVisible;
    }
}

export default Calendar;