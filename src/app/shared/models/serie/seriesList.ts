import { SeriesSummary } from "./seriesSummary";

export interface SeriesList {
    available?: number,
    returned?: number,
    collectionURI?: number,
    items?: Array<SeriesSummary>,
}
