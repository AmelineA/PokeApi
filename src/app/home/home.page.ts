import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private pokemons: any[];
  private pokemon: Pokemon;
  

  constructor(private apiService : ApiService) {
   
  }

  ngOnInit() {
    
  }
}
