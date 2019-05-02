import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritePokemonsPage } from './favorite-pokemons.page';

describe('FavoritePokemonsPage', () => {
  let component: FavoritePokemonsPage;
  let fixture: ComponentFixture<FavoritePokemonsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritePokemonsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritePokemonsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
