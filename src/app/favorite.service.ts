import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {


  private favPokemons : Array<Pokemon>;

  constructor(private storage : Storage) { }

  addToFavorite(pokemon : Pokemon){
    this.storage.set(pokemon.name, pokemon);
  }

  removeFromFavorite(pokemon : Pokemon){
    this.storage.remove(pokemon.name);
  }
  
  getFavoritePokemons(){
    return this.favPokemons;
  }
}
