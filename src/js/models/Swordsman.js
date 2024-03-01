import Character from './Character';

export default class Swordsman extends Character {
  constructor(type = 'Swordsman') {
    super(type);
    this.attack = 40;
    this.defence = 10;
  }
}
