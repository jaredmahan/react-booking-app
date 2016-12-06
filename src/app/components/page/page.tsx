import React, { Component } from "react";
import BookingViewContainer from "../../containers/BookingViewContainer";
import { BookingEntry } from "../bookingEntry/BookingEntry";
import FlatButton from "material-ui/FlatButton";
import scrolling from "../../helpers/scrolling";
import "./page.css";

interface PageProps extends React.Props<any> {
    updateSelectedDate: (date: Date) => void;
    entryVisible: boolean;
    calendarVisible: boolean;
    searchVisible: boolean;
}

export class Page extends React.Component<PageProps, {}> {
    render() {
        return <div className="page">
            <div id="scroller" className={this.showCalendar() ? "calendar-open" : "calendar-closed"} >
                {this.showEntryPage() ? <BookingEntry /> : <BookingViewContainer />}
            </div>
            <div className="now-button">
                <FlatButton label="Now" onClick={ (d) => this.updateToToday(d) } />
            </div>
        </div>;
    }
    updateToToday(date) {
        let today = new Date();
        this.props.updateSelectedDate(today);
        scrolling.scrollToDate(today);
    }
    showCalendar() {
        if (this.props.searchVisible) return false;
        return this.props.calendarVisible;
    }
    showEntryPage(): boolean {
        if (this.props.searchVisible) {
            return false;
        }
        return this.props.entryVisible;
    }
}