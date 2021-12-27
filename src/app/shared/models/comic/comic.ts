import { ComicSummary } from './comicSummary';
import { EventList } from '../eventList';
import { Image } from '../image';
import { SeriesSummary } from '../serie/seriesSummary';
import { StoryList } from '../storyList';
import { Url } from '../url';
import { ComicDate } from './comicDate';
import { ComicPrice } from './comicPrice';
import { CreatorList } from '../creatorList';
import { TextObject } from './textObject';

export interface Comic {
    id?: number,
    digitalId?: number,
    title?: string,
    issueNumber?: number,
    variantDescription?: string,
    description?: string,
    modified?: Date,
    isbn?: string,
    upc?: string,
    diamondCode?: string,
    ean?: string,
    issn?: string,
    pageCount?: number,
    textObjects?: Array<TextObject>,
    resourceUrl?: string,
    urls?: Array<Url>,
    series?: SeriesSummary,
    variants?: Array<ComicSummary>,
    collections?: Array<ComicSummary>,
    collectedIssues?: Array<ComicSummary>,
    dates?: Array<ComicDate>,
    prices?: Array<ComicPrice>,
    thumbnail: Image,
    images: Array<Image>,
    creators?: CreatorList,
    stories?: StoryList,
    events?: EventList
}
