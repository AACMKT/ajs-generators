import Character from './Character';

export default class Undead extends Character {
  constructor(type = 'Undead') {
    super(type);
    this.attack = 40;
    this.defence = 10;
  }
}
