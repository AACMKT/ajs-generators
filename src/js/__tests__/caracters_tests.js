import Character from '../models/Character';
import characters, { charAttributes } from '../models';

test('Character parent class error response on creation test', () => {
  expect(() => new Character()).toThrowError('Only defined characters are allowed');
});

test.each(characters)('Character сhild classes successful creation tests', (Char) => {
  expect(() => new Char()).not.toThrowError();
});

test.each(charAttributes)('Character %s proper attributes creation tests', (type, Char, attack, defence, level) => {
  const char = new Char();
  const charArr = [char.type, char.attack, char.defence, char.level];
  expect(charArr).toEqual([type, attack, defence, level]);
});
