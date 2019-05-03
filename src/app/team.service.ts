import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private team : Array<Pokemon> = [];
  private list : string = "TEAM";

  constructor(private storage : Storage) {
    this.storage.set(this.list, this.team);
   }

  addToTeam(pokemon : Pokemon){
    console.log("adding pokemon to team");
    this.team.push(pokemon);
    this.storage.set(this.list, this.team);
    console.log("nombre de pokemon dans l'équipe' : "+ this.team.length);
    console.log("pokemon added to team")
  }

  removeFromTeam(pokemon : Pokemon){
    console.log("removing pokemon from team");
    let index= this.team.findIndex(p=>p.name==pokemon.name);
    console.log("pokemon à supprimer : "+this.team[index]);
    this.team.splice(index, 1);
    this.storage.set(this.list, this.team);
    console.log("nombre de pokemon dans l'équipe' : "+ this.team.length);
    console.log("pokemon added to team")
  }
  
  getTeam(){
    console.log(this.team);
    return this.storage.get(this.list);/*.then(val=>{
      this.team=val;
      console.log("getFav : " +  JSON.stringify(this.team));
    })*/
  }

  alreadyInTeam(pokemon : Pokemon){
    console.log(this.team);
    if (this.team.includes(pokemon)){
      return true;
    }
    else{
      return false;
    }
  
  }
}

