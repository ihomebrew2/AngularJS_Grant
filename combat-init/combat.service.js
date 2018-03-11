angular.module("grantApp").service("CombatService", function () {
  this.names = {};


  this.startCombat = function (playerName, enemyName) {
    this.names = {
      playerName: playerName,
      enemyName: enemyName
    };
    this.player;
    this.enemy;
    player = new Player(this.names.playerName, 40);
    enemy = new Player(this.names.enemyName, 10);
    console.log(player);
    console.log(enemy);


  }

  this.combatPhase = function (playerName, enemyName) {
    console.log("Combat Phase from Service");
    return this.names;
  }

});