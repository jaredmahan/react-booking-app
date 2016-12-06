import { connect } from "react-redux";
import * as actions from "../actions";
import * as c from "../constants";
import { TopNav } from "../components/topNav/topNav";

const mapDispatchToProps = (dispatch) => {
    return {
        toggleCalendar: (): void => { dispatch(actions.toggleCalendar()); },
        toggleEntry: (): void => { dispatch(actions.toggleEntry()); },
        toggleSearch: (): void => {
            dispatch(actions.toggleSearch());
            dispatch(actions.setVisibilityFilter(c.VisibilityFilters.SHOW_ALL));
        },
        search: (term: string): void => {
            dispatch(actions.setSearchTerm(term));
            dispatch(actions.setVisibilityFilter(c.VisibilityFilters.SHOW_FILTERED));
        }
    };
};

const mapStateToProps = (state) => {
    return {
        selectedDate: <Date>state.selectedDate,
        calendarVisible: <boolean>state.calendarVisible,
        searchVisible: <boolean>state.searchVisible
    };
};

const NavBarContainer = connect(mapStateToProps, mapDispatchToProps)(TopNav);

export default NavBarContainer;
