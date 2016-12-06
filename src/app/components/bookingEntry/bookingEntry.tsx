import React, { Component } from "react";
import FlatButton from "material-ui/FlatButton";
import TextField from "material-ui/TextField";
import "./bookingEntry.css";

interface BookingEntryProps extends React.Props<any> {
    toggle?: () => void;
    newBooking?: any;
}

export class BookingEntry extends React.Component<BookingEntryProps, {}> {
    render() {
        return <div className="booking-entry">
            <div className="booking-entry-header">Enter A Booking</div>
            <div className="booking-entry-body">
                <TextField className="input" ref="name" hintText="Booking Name" />
                <TextField className="input" ref="room" hintText="Room" />
                <TextField className="input"  ref="start" hintText="Start Time" />
                <TextField className="input"  ref="end" hintText="End Time" />
                <div className="push-right">
                    <FlatButton style={{ color: "#4f88e8" }} onClick={this.props.toggle} label="Add New Booking" />
                </div>
            </div>
        </div>;
    }
    componentDidMount() {
        let refs: any = this.refs;
        refs.name.getInputNode().focus();
    }
}

export default BookingEntry;
