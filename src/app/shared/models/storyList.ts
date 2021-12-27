import { StorySummary } from "./character/storySummary";

export interface StoryList {
    available?: number,
    returned?: number,
    collectionURI?: number,
    items?: Array<StorySummary>,
}
