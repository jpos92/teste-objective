import { ComicList } from '../comic/comicList';
import { EventList } from '../eventList';
import { Image } from '../image';
import { SeriesList } from '../serie/seriesList';
import { StoryList } from '../storyList';
import { Url } from '../url';

export interface Character {
    id: number,
    name?: string,
    description?: string,
    modified?: Date,
    resourceURI?: string,
    urls?: Array<Url>,
    thumbnail?: Image,
    comics?: ComicList,
    stories?: StoryList,
    events?: EventList,
    series?: SeriesList
}
