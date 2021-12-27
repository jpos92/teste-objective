import { CharacterSummary } from "./characterSummary";

export interface CharacterList {
    available?: number,
    returned?: number,
    collectionURI?: string,
    items?: Array<CharacterSummary>
}
