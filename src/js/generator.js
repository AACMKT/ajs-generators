export default class Team {
  constructor(team) {
    this.team = team;
  }

  * [Symbol.iterator]() {
    for (let i = 0; i < this.team.length; i += 1) {
      yield this.team[i];
    }
  }
}
