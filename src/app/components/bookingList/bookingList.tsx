import React, { Component } from "react";
import { Booking } from "../booking/booking";
import moment from "moment";
import "./bookingList.css";


interface BookingListProps extends React.Props<any> {
    bookings: Array<any>;
    date: Date;
}

export class BookingList extends React.Component<BookingListProps, {}> {
    render() {
        return <div name={moment(this.props.date).format("MMDDYYYY")} className="booking-list">
            <div className="booking-list-header">
                {this.isToday() ? <span>Today</span> : null} {moment(this.props.date).format("ddd MMM D")}
            </div>
            {this.props.bookings.map((booking: any, index: number) =>
                <Booking key={index} booking={booking} />
            )}
        </div>;
    }
    isToday(): boolean {
        let today = moment(new Date()).startOf("day");
        let date = moment(this.props.date).startOf("day");
        return today.isSame(date);
    }
}

export default BookingList;