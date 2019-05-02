import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';
import { TransferDataService } from '../transfer-data.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
      
  pokemons: Array<Pokemon>; 

  /**
   *
   */
  constructor(private apiService: ApiService, private router: Router, private transferData: TransferDataService) { 
    this.pokemons = new Array();
    this.getPokemonList();
  }

  getPokemonDetails(pokemon: Pokemon){
        this.transferData.setData(pokemon);
        console.log(pokemon);
        this.router.navigate(["/poke-detail"]);
  }
  
  
  getPokemonFromList(url:string){
    this.apiService.getPokeFromList(url).subscribe((val) => {
      //récupérer le résultat
      let result: any = val;
      //nouveau pokemon à partir des données récupérées
      let pokemon = new Pokemon();
      pokemon.id = result.id;
      pokemon.name = result.name;
      pokemon.picture = result.sprites.front_default;
      //ajouter le nouveau pokemon à la liste
      this.pokemons.push(pokemon);
    })
  }

  getPokemonList(){
    this.apiService.getPokeList().subscribe((val) => {
      //récuperer le resultat
      let result: any = val;
      //récupérer le tableau d'informations du résultat
      let results = result.results;
      //pour chaque élément du tableau, récupérer les informations du pokemon
      for(let p of results){
       this.getPokemonFromList(p.url);
      }
    })
  }

  gotoDetail(pokemon : Pokemon){

  }
}
