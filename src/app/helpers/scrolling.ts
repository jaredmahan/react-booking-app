import moment from "moment";

interface Element {
    offsetTop?: number;
}
class ScrollingExt {
    scrollToDate(date): void {
        let dateString = moment(date).format("MMDDYYYY");
        // tslint:disable-next-line:quotemark
        let selector: string = '[name="' + dateString + '"]';
        let scrollEl = document.getElementById("scroller");
        let elementToScrollTo: Element = scrollEl.querySelectorAll(selector)[0];
        if (elementToScrollTo)
            scrollEl.scrollTop = elementToScrollTo.offsetTop;
    }
}

export default new ScrollingExt();


