import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';
import { TransferDataService } from '../transfer-data.service';
import { FavoriteService } from '../favorite.service';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
      
  pokemons: Array<Pokemon>; 
  searchInput: string;

constructor(private apiService: ApiService, private router: Router, private transferData: TransferDataService, private fav : FavoriteService, private tserv : TeamService) { }

  ngOnInit() {
    this.pokemons = new Array();
    this.getPokemonList();
  }

  //recuperer le détails d'un pokemon et renvoyer vers la page correspondante
  gotoDetail(pokemon: Pokemon){
        this.transferData.setData(pokemon);
        this.router.navigate(["/poke-detail"]);
  }
  
  //recupérer une liste de pokemon
  getPokemonList(){
    this.apiService.getPokeList().subscribe((val) => {
      //récuperer le resultat
      let result: any = val;
      //récupérer le tableau d'informations du résultat
      let results: any = result.results;
      //pour chaque élément du tableau, récupérer les informations du pokemon
      for(let p of results){
       this.getPokemonFromList(p.url);
      }
    })
  }
  
  //recupérer chaque pokemon pour chaque ligne de la liste précédemment récupérée
  getPokemonFromList(url: string){
    this.apiService.getPokeFromList(url).subscribe((val) => {
      //récupérer le résultat
      let result: any = val;
      //nouveau pokemon à partir des données récupérées
      let pokemon = this.getPokemon(result);
      //ajouter le nouveau pokemon à la liste
      this.pokemons.push(pokemon);
    })
  }

  //rechercher un pokemon par son nom
  searchPoke(){
    this.apiService.getPokeByName(this.searchInput).subscribe((val) => {
      let result: any = val;
      
      if(result.name != null){
        let pokemon = this.getPokemon(result);
        this.gotoDetail(pokemon);
      }
    })
  }

  //récuperer la couleur du pokemon à partir de son espèce
  setPokeColor(url: string, pokemon:Pokemon){
    this.apiService.getPokeColor(url).subscribe((val) => {
      let result: any = val;
      
      pokemon.color = result.color.name;
    })
  }
  
  //récupérer un objet pokemon à partir du résultat renvoyé par l'api
  getPokemon(resultFromApi: any){
    let pokemon = new Pokemon();
    pokemon.id = resultFromApi.id;
    pokemon.name = resultFromApi.name;
    pokemon.picture = resultFromApi.sprites.front_default;
    pokemon.setWeight(resultFromApi.weight);
    pokemon.setHeight(resultFromApi.height);
    this.setPokeColor(resultFromApi.species.url, pokemon);
    return pokemon;
  }

  gotoFavorite(){
   // this.transferData.setData(this.fav.getFavoritePokemons());
    this.router.navigate(['/favorite-pokemons']);
  }

  gotoTeam(){
    this.transferData.setData(this.tserv.getTeam());
    this.router.navigate(['/team']);
  }
}
