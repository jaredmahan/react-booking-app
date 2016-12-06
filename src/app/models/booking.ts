namespace app.models {
    export interface booking {
        id: number;
        eventName: string;
        roomName: string;
        start: Date;
        end: Date;
    }
}