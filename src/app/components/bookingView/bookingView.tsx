import React, { Component } from "react";
import { BookingList } from "../bookingList/BookingList";

interface BookingViewProps extends React.Props<any> {
    groupedBookings: Array<any>;
    calendarVisible: boolean;
}

interface BookingViewState {
    windowHeight: number;
    componentHeight?: string;
}

export class BookingView extends React.Component<BookingViewProps, BookingViewState> {
    render() {
        return <div className="booking-view">
            {this.props.groupedBookings.map((group: any, index: number) =>
                <div key={index}>
                    <BookingList date={group.key} bookings={group.bookings} />
                </div>
            )}
        </div>;
    }
}

export default BookingView;