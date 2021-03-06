import { CreatorSummary } from "./creatorSummary";

export interface CreatorList {
    available?: number,
    returned?: number,
    collectionURI?: string,
    items?: Array<CreatorSummary>
}
