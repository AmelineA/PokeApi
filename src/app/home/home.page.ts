import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
      

  pokemons : Array<Pokemon>

  constructor(private apiService: ApiService) { 
  }

  ngOnInit() {
    this.get20Poke();
  }

  

  get20Poke(){
    this.apiService.getPokeJSON().subscribe((val) => {
      let result : any = val;
      
      this.pokemons.forEach(pokemon => {
        pokemon.name = result.result.name;
        pokemon.url = result.result.url;
      });
      
    });
  }

  gotoDetail(pokemon : Pokemon){

  }
}
