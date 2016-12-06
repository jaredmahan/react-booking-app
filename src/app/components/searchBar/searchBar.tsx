import React, { Component } from "react";
import FlatButton from "material-ui/FlatButton";
import TextField from "material-ui/TextField";
import "./SearchBar.css";


interface SearchBarProps extends React.Props<any> {
    onToggle: () => void;
    onSearch: (term: string) => void;
    term: string;
}

interface SearchBarState {
    term: string;
}

export class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
    constructor(props) {
        super(props);
        this.state = { term: "" };
    }
    render() {
        return <div className="search-bar">
            <div className="text-container">
                <TextField style={{ color: "#4f88e8" }} value={this.state.term} onChange={ e => this.handleChange(e)} ref="searchInput" hintText="Search Bookings" />
            </div>
            <div className="pull-right">
                <FlatButton style={{ color: "#4f88e8" }} onClick={this.props.onToggle} label="Cancel" />
            </div>
        </div>;
    }
    componentDidMount() {
        let refs: any = this.refs;
        refs.searchInput.getInputNode().focus();
    }
    handleChange(event) {
        this.props.onSearch(event.target.value);
        this.setState({ term: event.target.value});
    }
}

export default SearchBar;