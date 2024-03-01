import Bowman from './Bowman';
import Daemon from './Daemon';
import Magician from './Magician';
import Swordsman from './Swordsman';
import Undead from './Undead';
import Vampire from './Vampire';

export default [
  Bowman,
  Daemon,
  Magician,
  Swordsman,
  Undead,
  Vampire,
];

export const charAttributes = [
  ['Bowman', Bowman, 25, 25, 1],
  ['Daemon', Daemon, 10, 10, 1],
  ['Magician', Magician, 10, 40, 1],
  ['Swordsman', Swordsman, 40, 10, 1],
  ['Undead', Undead, 40, 10, 1],
  ['Vampire', Vampire, 25, 25, 1],
];
