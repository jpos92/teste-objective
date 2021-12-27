import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CharacterDetailsComponent } from './components/character-details/character-details.component';
import { CharacterSearchComponent } from './components/character-search/character-search.component';

const routes: Routes = [
  {
    path: '',
    component: CharacterSearchComponent
  },
  {
    path: ':id',
    component: CharacterDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonagensRoutingModule { }
