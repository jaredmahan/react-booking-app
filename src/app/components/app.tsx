
import React from "react";
import ReactDOM from "react-dom";
import DatePicker from "material-ui/DatePicker";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import injectTapEventPlugin from "react-tap-event-plugin";
import { createStore } from "redux";
import CalendarContainer from "../containers/CalendarContainer";
import NavBarContainer from "../containers/NavBarContainer";
import PageContainer from "../containers/PageContainer";

export class App extends React.Component<{}, {}> {

    constructor(props) {
        super(props);
        injectTapEventPlugin();
    }
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <NavBarContainer />
                    <CalendarContainer />
                    <PageContainer />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;