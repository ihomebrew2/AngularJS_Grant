angular.module("grantApp").component("combatView", {
  templateUrl: "combat-view/combat-view.html",
  controller: ['CombatService', "$location", function (CombatService, $location) {
    this.names = {};
    // this.player;
    // this.enemy;

    this.names = CombatService.combatPhase(this.playerName, this.enemyName);
    console.log("component", this.names);

    this.player = CombatService.getPlayer(this.player);
    this.enemy = CombatService.getEnemy(this.enemy);

    this.attack = function () {
      CombatService.attack();
      CombatService.playerWins();
    }

    this.getHealing = function () {
      CombatService.getHealing();
    }

    this.retreat = function () {
      $location.url("/retreat");
    }

  }]
});
