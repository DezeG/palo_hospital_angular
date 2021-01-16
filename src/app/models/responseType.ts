import { Embedded } from "./embedded";
import { Page } from "./page";

export interface ResponseType {
    _embedded: Embedded;
    _links: any;
    page: Page; 
}