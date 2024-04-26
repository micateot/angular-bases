import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {

  public characters: Character[] = [
    {
      uuid: uuid(),
      name: 'Krillin',
      power: 1000
    },
    {
      uuid: uuid(),
      name: 'Goku',
      power: 9500
    },
    {
      uuid: uuid(),
      name: 'Vegeta',
      power: 7500
    }
  ];

  constructor() { }

  addCharacter(character: Character): void {
    const newCharacter: Character = {...character, uuid: uuid()}
    this.characters.push(newCharacter);
    // this.characters = [...this.characters, character]
  }

  deleteCharacterById(uuid?: string): void {
    this.characters = this.characters.filter((character: Character) => character.uuid !== uuid)
  }
}
