import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {


  private favPokemons : Array<Pokemon> = [];
  private list : string = "FAV";

  constructor(private storage : Storage) {
    this.storage.set(this.list, this.favPokemons);
   }

  addToFavorite(pokemon : Pokemon){
    console.log("adding pokemon to favorite");
    this.favPokemons.push(pokemon);
    this.storage.set(this.list, this.favPokemons);
//    this.getFavoritePokemons().push(pokemon);
    console.log("nombre de pokemon dans les favoris : "+ this.favPokemons.length);
    console.log("pokemon added to favorite")
    console.log("Array of fav poke : " + JSON.stringify(this.favPokemons));
  }

  removeFromFavorite(pokemon : Pokemon){
    console.log("removing pokemon from favorite");
    let index= this.favPokemons.findIndex(p=>p.name==pokemon.name);
    console.log("pokemon à supprimer : "+this.favPokemons[index]);
    this.favPokemons.splice(index, 1);
    this.storage.set(this.list, this.favPokemons);
    console.log("nombre de pokemon dans les favoris : "+ this.favPokemons.length);
    console.log("pokemon added to favorite")
  }
  
  getFavoritePokemons(){
    console.log(this.favPokemons);
    return this.storage.get(this.list);/*.then(val=>{
      this.favPokemons=val;
      console.log("getFav : " +  JSON.stringify(this.favPokemons));
    })*/
  }
}
