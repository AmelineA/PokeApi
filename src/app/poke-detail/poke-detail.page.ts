import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poke-detail',
  templateUrl: './poke-detail.page.html',
  styleUrls: ['./poke-detail.page.scss'],
})
export class PokeDetailPage implements OnInit {

  private storage:Storage;

  constructor(storage: Storage) { 
    this.storage = storage;
  }

  ngOnInit() {
  }

}
