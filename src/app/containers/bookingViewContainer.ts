import { connect } from "react-redux";
import * as c from "../constants";
import * as actions from "../actions";
import { BookingView } from "../components/bookingView/BookingView";

import moment from "moment";

const getVisibleBookings = (bookings: Array<any>, filter, term: string = "") => {
    switch (filter) {
        case c.VisibilityFilters.SHOW_FILTERED:
            let trimmedTerm: string = term.toLowerCase().trim();
            let filtered = bookings.filter((booking, index) => {
                let containsEventName = booking.eventName.toLowerCase().indexOf(trimmedTerm) >= 0;
                let containsRoomName = booking.roomName.toLowerCase().indexOf(trimmedTerm) >= 0;
                return containsEventName || containsRoomName;
            });
            return groupByDate(filtered);
        case c.VisibilityFilters.SHOW_ALL:
        default:
            return groupByDate(bookings);
    }
};

function groupByDate(bookings: Array<any>) {
    // Uses reduce to group bookings by date
    let groupedBookings: Array<any> = [];
    if (bookings.length > 1) {
        groupedBookings = groupArrayByDate(bookings);
    } else if (bookings.length === 1) {
        let booking = bookings[0];
        let key = moment(booking.start).startOf("day");
        groupedBookings.push({ key: key, bookings: [booking] });
    }

    return sortGroupedBookings(groupedBookings);

}

function groupArrayByDate(bookings: Array<any>) {
    let grouping: Array<any> = [];
    bookings.forEach((booking, index) => {
        let key = moment(booking.start).startOf("day");
        let groupIndex = grouping.map((g, index) => { return g.key.format("MMDDYY"); }).indexOf(key.format("MMDDYY"));
        if (groupIndex < 0)
            grouping.push({ key: key, bookings: [booking] });
        else
            grouping[groupIndex].bookings.push(booking);
    });

    return grouping;
}

function sortGroupedBookings(groupedBookings: Array<any>) {
    return groupedBookings.sort((a, b) => {
        let dateA = a.key;
        let dateB = b.key;
        return (dateA < dateB) ? -1 : (dateA > dateB) ? 1 : 0;
    });
}

const mapStateToProps = (state) => {
    return {
        calendarVisible: state.calendarVisible,
        groupedBookings: getVisibleBookings(state.bookings, state.visibilityFilter, state.searchTerm),
    };
};

const BookingListContainer = connect(mapStateToProps)(BookingView);

export default BookingListContainer;




