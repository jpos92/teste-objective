import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';
import { CharacterSearchComponent } from './components/character-search/character-search.component';
import { ComicCardComponent } from './components/comic-card/comic-card.component';
import { SerieCardComponent } from './components/serie-card/serie-card.component';
import { PersonagensRoutingModule } from './personagens-routing.module';


@NgModule({
  declarations: [
    CharacterSearchComponent,
    CharacterCardComponent,
    CharacterDetailsComponent,
    ComicCardComponent,
    SerieCardComponent
  ],
  imports: [
    CommonModule,
    PersonagensRoutingModule,
    SharedModule
  ]
})
export class PersonagensModule { }
