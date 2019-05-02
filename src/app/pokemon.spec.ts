import { Pokemon } from './pokemon';

describe('Pokemmon', () => {
  it('should create an instance', () => {
    expect(new Pokemon()).toBeTruthy();
  });
});
