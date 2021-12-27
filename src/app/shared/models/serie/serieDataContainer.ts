import { Serie } from "./serie";

export interface SerieDataContainer {
    offset?: number,
    limit?: number,
    total?: number,
    count?: number,
    results?: Array<Serie>
}
