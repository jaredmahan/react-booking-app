import React, { Component } from "react";
import moment from "moment";

import "./booking.css";
require("moment-duration-format");

interface BookingProps extends React.Props<any> {
    booking: any;
}

export class Booking extends React.Component<BookingProps, {}> {
    render() {
        return <div className="booking">
            <div className="left">
                <div>{moment(this.props.booking.start).format("h:mm A")}</div>
                <div>{moment(this.props.booking.end).format("h:mm A")}</div>
                <div>{this.getDuration()}</div>
            </div>
            <div className="right">
                <div>{this.props.booking.eventName}</div>
                <div>{this.props.booking.roomName}</div>
            </div>
        </div>;
    }
    private getDuration(): any {
        let end = moment(this.props.booking.end);
        let start = moment(this.props.booking.start);
        let duration: any = moment.duration(end.diff(start));
        return duration.format("h[h] m[m]").replace(" 0m", "");
    }
}

export default Booking;
