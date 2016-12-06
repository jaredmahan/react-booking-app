import { connect } from "react-redux";
import * as actions from "../actions";
import { Page } from "../components/page/Page";
import moment from "moment";

const mapDispatchToProps = (dispatch) => {
    return {
        updateSelectedDate: (date: Date): void => {
            dispatch(actions.setValue(moment(date)));
        }
    };
};

const mapStateToProps = (state) => {
    console.log(state);
    return {
        entryVisible: <boolean>state.entryVisible,
        calendarVisible: <boolean>state.calendarVisible,
        searchVisible: <boolean>state.searchVisible
    };
};

const PageContainer = connect(mapStateToProps, mapDispatchToProps)(Page);

export default PageContainer;