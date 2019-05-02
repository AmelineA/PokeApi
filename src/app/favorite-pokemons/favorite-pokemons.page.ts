import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../favorite.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-favorite-pokemons',
  templateUrl: './favorite-pokemons.page.html',
  styleUrls: ['./favorite-pokemons.page.scss'],
})
export class FavoritePokemonsPage implements OnInit {

  pokemons : Array<Pokemon>

  constructor(private fav : FavoriteService) { }

  ngOnInit() {
    this.pokemons = this.fav.getFavoritePokemons();
  }


}
