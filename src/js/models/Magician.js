import Character from './Character';

export default class Magician extends Character {
  constructor(type = 'Magician') {
    super(type);
    this.attack = 10;
    this.defence = 40;
  }
}
