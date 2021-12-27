import { Component, Input } from '@angular/core';
import { Comic } from 'src/app/shared/models/comic/comic';

@Component({
  selector: 'app-comic-card',
  templateUrl: './comic-card.component.html',
  styleUrls: ['./comic-card.component.scss']
})
export class ComicCardComponent {

  @Input() comic!: Comic;

  constructor() { }

}
