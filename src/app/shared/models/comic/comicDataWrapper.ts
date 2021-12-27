import { ComicDataContainer } from "./comicDataContainer";

export interface ComicDataWrapper {
    code?: number,
    status?: string,
    copyright?: string,
    attributionText?: string,
    attributionHTML?: string,
    data?: ComicDataContainer,
    etag?: string
}
