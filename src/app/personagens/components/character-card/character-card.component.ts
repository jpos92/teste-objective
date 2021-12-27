import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from 'src/app/shared/models/character/character';
import { CharacterService } from 'src/app/shared/services/character.service';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent {

  @Input() character!: Character;

  constructor(private characterService: CharacterService,
              private router: Router) { }

  goToDetails() {
    this.router.navigate(['/personagens/', this.character.id])
  }

}
