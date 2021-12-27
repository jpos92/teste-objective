import { CharacterList } from "../character/characterList";
import { ComicList } from "../comic/comicList";
import { EventList } from "../eventList";
import { Image } from "../image";
import { SeriesSummary } from "./seriesSummary";
import { StoryList } from "../storyList";
import { Url } from "../url";
import { CreatorList } from "../creatorList";

export interface Serie {
    id: number,
    title?: string,
    description?: string,
    resourceURI?: string,
    urls?: Array<Url>,
    startYear?: number,
    endYear?: number,
    rating?: string,
    modified?: Date,
    thumbnail?: Image,
    comics?: ComicList,
    stories?: StoryList,
    events?: EventList,
    characters?: CharacterList,
    creators?: CreatorList,
    next?: SeriesSummary,
    previous: SeriesSummary
}
