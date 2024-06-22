// 1. Object Creation Basics:
// • Task: Create an object representing a superhero with properties like name,
// secretIdentity, powers (an array), and weakness.

// 2. Methods and Functionality:
// • Task: Add methods to the superhero object:
// o usePower(powerName): Logs a message about the hero using a
// specific power.
// o revealIdentity(): Logs the hero’s secret identity

const superHero = {
  name: "the flash",
  secretIdentity: "bery alain",
  powers: ["fast", "speed", "lightning", "running"],
  weaknesses: ["family", "girlfriend"],
  usePower(powerName) {
    console.log(
      `this superHero is so ${powerName ? powerName : this.powers[0]}`
    );
  },
  revealIdentity() {
    console.log(`this superHero real name is ${this.secretIdentity}`);
  },
};

// 3. Object Constructors:
// • Task: Create a Superhero constructor function to streamline the creation of
// multiple superheroes.

function CreateSuperHero(name, secretIdentity, powers, weakness) {
  this.name = name;
  this.secretIdentity = secretIdentity;
  this.powers = powers;
  this.weakness = weakness;
  //   this.usePower = function (powerName) {
  //     console.log(`${this.name} is so ${powerName ? powerName : this.powers[0]}`);
  //   };
  //   this.revealIdentity = function () {
  //     console.log(`${this.name} real name is ${this.secretIdentity}`);
  //   };
}

// Using protypical inheritance
CreateSuperHero.prototype.usePower = function (powerName) {
  console.log(`${this.name} is so ${powerName ? powerName : this.powers[0]}`);
};

CreateSuperHero.prototype.revealIdentity = function () {
  console.log(`${this.name} real name is ${this.secretIdentity}`);
};

const realFlash = new CreateSuperHero(
  "the flash",
  "Berry alain",
  ["fast", "speed"],
  "girlfriend"
);

const hulk = new CreateSuperHero(
  "Incredible hulk",
  "Burner",
  ["Strong", "Jump"],
  "girlfriend"
);

realFlash.usePower();
console.log(hulk);
// realFlash.usePower();
// realFlash.revealIdentity();
