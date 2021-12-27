import { EventSummary } from "./eventSummary";

export interface EventList {
    available?: number,
    returned?: number,
    collectionURI?: number,
    items?: Array<EventSummary>,
}
