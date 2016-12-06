import React, { Component } from "react";
import {SearchBar} from "../searchBar/SearchBar";
import FlatButton from "material-ui/FlatButton";
import FontIcon from "material-ui/FontIcon";
import moment from "moment";
import "./topNav.css";

interface TopNavProps extends React.Props<any> {
    calendarVisible: boolean;
    selectedDate: Date;
    searchVisible: boolean;
    entryVisible: boolean;
    searchTerm: string;
    toggleCalendar: () => void;
    toggleEntry: () => void;
    toggleSearch: () => void;
    search: () => void;
}
export class TopNav extends React.Component<TopNavProps, void> {
    render() {
        return <div className="top-nav">
            <FlatButton disabled={true} style={{ minWidth: "40px", color: "#4f88e8" }} icon={<FontIcon className="material-icons">menu</FontIcon>} />
            <div className="calendar-toggle" onClick={this.props.toggleCalendar}>
                {moment(this.props.selectedDate).format("MMMM YYYY")}
                <div className="icon-container">
                    {this.props.calendarVisible ?
                        <FontIcon className="material-icons" style={{ color: "#4f88e8" }}>keyboard_arrow_up</FontIcon> :
                        <FontIcon className="material-icons" style={{ color: "#4f88e8" }}>keyboard_arrow_down</FontIcon>
                    }
                </div>
            </div>
            <div className="push-right">
                <FlatButton onClick={this.props.toggleSearch} style={{ minWidth: "40px", color: "#4f88e8" }} icon={<FontIcon className="material-icons">search</FontIcon>} />
                <FlatButton onClick={this.props.toggleEntry} style={{ minWidth: "40px", color: "#4f88e8" }} icon={<FontIcon className="material-icons">add</FontIcon>} />
            </div>
            {this.props.searchVisible ? <SearchBar onSearch={this.props.search} term={this.props.searchTerm} onToggle={this.props.toggleSearch} /> : null}
        </div>;
    };
}

export default TopNav;
