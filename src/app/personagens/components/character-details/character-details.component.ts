import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Character } from 'src/app/shared/models/character/character';
import { Comic } from 'src/app/shared/models/comic/comic';
import { Serie } from 'src/app/shared/models/serie/serie';
import { CharacterService } from 'src/app/shared/services/character.service';
import { ComicService } from 'src/app/shared/services/comic.service';
import { SerieService } from 'src/app/shared/services/serie.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {

  character$!: Observable<Character>;
  comics$!: Observable<Comic[]>;
  series$!: Observable<Serie[]>;

  constructor(
    private routeParams: ActivatedRoute,
    private characterService: CharacterService,
    private comicService: ComicService,
    private serieService: SerieService
  ) { }

  ngOnInit() {
    this.routeParams.params
      .subscribe(data => {
        this.character$ = this.characterService.getById(data.id);
        this.comics$ = this.comicService.getComicsByCharacter(data.id);
        this.series$ = this.serieService.getSeriesByCharacter(data.id);
      } )
  }

}