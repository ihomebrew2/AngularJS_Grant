angular.module("grantApp").service("CombatService", function () {
  this.names = {};
  this.player;
  this.enemy;

  this.startCombat = function (playerName, enemyName) {
    this.names = {
      playerName: playerName,
      enemyName: enemyName
    };
    this.player = new Player(this.names.playerName, 40);
    this.enemy = new Player(this.names.enemyName, 10);
    console.log(this.player);
    console.log(this.enemy);
  }

  this.combatPhase = function (playerName, enemyName) {
    console.log("Combat Phase from Service");
    return this.names;
  }

  this.getPlayer = function (player) {
    return this.player;
  }

  this.getEnemy = function (enemy) {
    return this.enemy;
  }

  this.attack = function (player, enemy) {
    this.enemy.attackDamage();
    this.player.attackDamage();
    console.log(this.enemy);
    console.log(this.player);
  }

  this.getHealing = function (player) {
    this.player.healing();
    console.log(this.player);
  }

  this.playerWins = function () {
    console.log("playerWins function");
    if (this.enemy.score <= 0 & this.player.wins < 5) {
      i++
      this.enemy.score = 10;
      console.log("play again", i);
    } else if (this.player.score <= 0) {
      console.log("Player has been defeated")
    }

  }

});