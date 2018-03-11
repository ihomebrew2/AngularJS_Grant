class Player {
  constructor(name, health) {
    this.name = name;
    this.score = health;
    this.heals = 2;
    this.wins = 0;
  }
  attackDamage() {
    this.score = this.score - getDamage();
  }
  healing() {
    this.score = this.score + getHealing();

  }
}

function getDamage() {
	return Math.floor(Math.random() * 3) + 1;
}

function getHealing() {
	return Math.floor(Math.random() * 10) + 1;
}