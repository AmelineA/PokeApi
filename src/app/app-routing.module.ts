import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'poke-detail', loadChildren: './poke-detail/poke-detail.module#PokeDetailPageModule' },  { path: 'favorite-pokemons', loadChildren: './favorite-pokemons/favorite-pokemons.module#FavoritePokemonsPageModule' },
  { path: 'team', loadChildren: './team/team.module#TeamPageModule' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
