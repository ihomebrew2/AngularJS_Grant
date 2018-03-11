angular.module("grantApp").component("combatInit", {
	templateUrl: "combat-init/combat-init.html",
	bindings: {
		playerName: "<",
		enemyName: "<"
	},

	controller: ["CombatService", "$location", function (CombatService, $location) {
		this.startCombat = function () {
			CombatService.startCombat(this.playerName, this.enemyName);
			$location.url("/combat");
		}
	}]

});