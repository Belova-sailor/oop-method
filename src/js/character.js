export default class Character {
  constructor(name, type) {
    const types = [
      'Boweman',
      'Swordsman',
      'Magician',
      'Daemon',
      'Undead',
      'Zombie',
    ];

    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error(
        'Name of character must be > 2 and < 10 symbol of string!',
      );
    } else {
      this.name = name;
    }

    if (types.includes(type)) {
      this.type = type;
    } else {
      throw new Error('There is no such hero');
    }

    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack += this.attack * 0.2;
      this.defence += this.defence * 0.2;
      this.health = 100;
    } else {
      throw new Error('Your hero is dead! Can not level up!');
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    } else {
      throw new Error('Error!');
    }
  }
}
