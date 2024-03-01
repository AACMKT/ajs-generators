import charsArr from '../models';
import Team from '../generator';

test('Generator of the Team class test', () => {
  const team = new Team(charsArr);
  let i = 0;
  for (const char of team) {
    expect(char).toEqual(charsArr[i]);
    i += 1;
  }
});
