import canIterate from '../isIterable';

test.each([[new Map(), true],
  [new Set(), true],
  [null, false],
  [10, false],
  ['Netology', true],

])('canIterate function for %s result test', (entity, bool) => {
  expect(canIterate(entity)).toBe(bool);
});
