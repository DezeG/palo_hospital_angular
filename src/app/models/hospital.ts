import { WaitingList } from "./waitingList";

export interface Hospital {
    id: number;
    name: string;
    geolocation: Location;
    waitingList: WaitingList[];
}