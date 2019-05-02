import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FavoritePokemonsPage } from './favorite-pokemons.page';

const routes: Routes = [
  {
    path: '',
    component: FavoritePokemonsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FavoritePokemonsPage]
})
export class FavoritePokemonsPageModule {}
