// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage) {
        let remainingHealth = this.health -= damage;
        if (remainingHealth > 0) {
            return `${this.name} has received ${damage} points of damage`;
        }
        else if (remainingHealth <= 0) {
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {

    receiveDamage(damage) {
        let remainingHealth = this.health -= damage;
        if (remainingHealth > 0) {
            return `A Saxon has received ${damage} points of damage`;
        }
        else if (remainingHealth <= 0) {
            return `A Saxon has died in combat`;
        }
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(Viking) {
        this.vikingArmy.push(Viking);
    }
    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon);
    }
    vikingAttack() {
        const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
        const randomSaxon = this.saxonArmy[randomSaxonIndex];
        const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
        const randomViking = this.vikingArmy[randomVikingIndex];

        const attackResult = randomSaxon.receiveDamage(randomViking.strength);

        if (randomSaxon.health <= 0) {
            this.saxonArmy.splice(randomSaxonIndex, 1);
        }
        return attackResult;
    }

    saxonAttack() {
        const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
        const randomSaxon = this.saxonArmy[randomSaxonIndex];
        const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
        const randomViking = this.vikingArmy[randomVikingIndex];

        const attackResult = randomViking.receiveDamage(randomSaxon.strength);

        if (randomViking.health <= 0) {
            this.vikingArmy.splice(randomVikingIndex, 1);
        }
        return attackResult;
    }






    showStatus() { }
}
