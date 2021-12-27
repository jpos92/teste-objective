import { Component, Input } from '@angular/core';
import { Serie } from 'src/app/shared/models/serie/serie';

@Component({
  selector: 'app-serie-card',
  templateUrl: './serie-card.component.html',
  styleUrls: ['./serie-card.component.scss']
})
export class SerieCardComponent {

  @Input() serie!: Serie;

  constructor() { }

}
