declare module 'rc-calendar' {
    export import Calendar = __RcCalendar.Calendar;
    export default Calendar
}
declare namespace __RcCalendar {
    interface CalendarProps {
        onSelect?(date);
        onChange?(date);
        value?: any;
        style?:any;
        className?: any;
        defaultValue?: any;
        showToday?: boolean;
    }
    export class Calendar extends React.Component<CalendarProps, {}>{

    }
}