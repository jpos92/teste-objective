import { SerieDataContainer } from "./serieDataContainer";

export interface SerieDataWrapper {
    code?: number,
    status?: string,
    copyright?: string,
    attributionText?: string,
    attributionHTML?: string,
    data?: SerieDataContainer,
    etag?: string
}
