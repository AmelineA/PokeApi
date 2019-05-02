import { Component } from '@angular/core';
<<<<<<< HEAD
import { Pokemon } from '../pokemon';
=======
>>>>>>> e0c4ab3246802d2642907da280de090e5eb5bdb1
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
<<<<<<< HEAD
  private pokemons: any[];
  private pokemon: Pokemon;
  

  constructor(private apiService : ApiService) {
   
  }

  ngOnInit() {
    
=======
      

  /**
   *
   */
  constructor(private apiService: ApiService) { 
  }

  getApi(){
    this.apiService.getPoke().subscribe((val) => {
      console.log(JSON.stringify(val));
    });
>>>>>>> e0c4ab3246802d2642907da280de090e5eb5bdb1
  }
}
