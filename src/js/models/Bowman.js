import Character from './Character';

export default class Bowman extends Character {
  constructor(type = 'Bowman') {
    super(type);
    this.attack = 25;
    this.defence = 25;
  }
}
