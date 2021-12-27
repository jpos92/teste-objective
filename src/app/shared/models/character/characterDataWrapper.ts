import { CharacterDataContainer } from "./characterDataContainer";

export interface CharacterDataWrapper {
    code?: number,
    status?: string,
    copyright?: string,
    attributionText?: string,
    attributionHTML?: string,
    data?: CharacterDataContainer,
    etag?: string
}
