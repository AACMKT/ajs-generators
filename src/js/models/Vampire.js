import Character from './Character';

export default class Vampire extends Character {
  constructor(type = 'Vampire') {
    super(type);
    this.attack = 25;
    this.defence = 25;
  }
}
