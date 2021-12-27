import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CharacterService } from 'src/app/shared/services/character.service';

@Component({
  selector: 'app-character-search',
  templateUrl: './character-search.component.html',
  styleUrls: ['./character-search.component.scss']
})
export class CharacterSearchComponent implements OnInit {

  searchForm!: FormGroup;

  constructor(
    public characterService: CharacterService,
    private fb: FormBuilder) { }

  ngOnInit() {
    //Se a lista estiver vazia, carrega os 10 primeiros heróis
    if (this.characterService._characterList.length == 0) {
      this.characterService.getAll()
        .subscribe(list => {
          this.characterService._characterList = [...this.characterService._characterList, ...list]
        });
    }

    this.searchForm = this.fb.group({
      characterName: ['']
    })
  }

  loadMore() {
    //Carrega mais 10 heóris na lista
    if (this.characterService._searchByName) {
      this.characterService._offset = this.characterService._offset + 10;
      this.characterService.getByName()
        .subscribe(list => {
          this.characterService._characterList = [...this.characterService._characterList, ...list]
        });
    } else {
      this.characterService._offset = this.characterService._offset + 10;
      this.characterService.getAll()
        .subscribe(list => {
          this.characterService._characterList = [...this.characterService._characterList, ...list]
        });
    }
  }

  searchByName() {
    //Todas vez que uma nova pesquisa é feita o offset é zerado para carregar desde os primeiros valores
    this.characterService._offset = 0;
    if (this.searchForm.get('characterName')?.value == '') {
      this.characterService.getAll()
        .subscribe(list => {
          this.characterService._characterList = list;
        });
    } else {
      this.characterService._name = this.searchForm.get('characterName')?.value;
      this.characterService.getByName()
        .subscribe(list => {
          this.characterService._characterList = list;
        })
    }
  }

}
