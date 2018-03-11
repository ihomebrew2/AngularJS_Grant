angular.module("grantApp").service("CombatService", function () {
  this.names = {};
  // this.player;
  // this.enemy;

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

  this.attack = function (player, enemy) {
    console.log("attacking");
    this.enemy.attackDamage();
    this.player.attackDamage();
    console.log(this.enemy);
    console.log(this.player);
  }

  // this.retreat = function() {
  //   console.log("retreat");
  // }

});