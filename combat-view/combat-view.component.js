angular.module("grantApp").component("combatView", {
  templateUrl: "combat-view/combat-view.html",
  controller: ['CombatService', "$location", function (CombatService, $location) {
    this.names = {};
    this.names = CombatService.combatPhase(this.playerName, this.enemyName);
    console.log(this.names);
  }]
});