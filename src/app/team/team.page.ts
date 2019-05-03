import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { TeamService } from '../team.service';
import { Router } from '@angular/router';
import { TransferDataService } from '../transfer-data.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.page.html',
  styleUrls: ['./team.page.scss'],
})
export class TeamPage implements OnInit {

  pokemons : Array<Pokemon>

  constructor(private tserv : TeamService, private router : Router, private td : TransferDataService) { 
    this.pokemons = new Array();
  }

  ngOnInit() {
   this.getPokemonTeam();
  }

  unsetFromTeam(pokemon : Pokemon){
    this.tserv.removeFromTeam(pokemon);
    this.getPokemonTeam();
  }

  gotoDetail(pokemon : Pokemon){
    this.td.setData(pokemon);
    this.router.navigate(['/poke-detail']);
  }

  getPokemonTeam(){
    this.tserv.getTeam().then(val => {
      this.pokemons = val;
    });
  }

}
