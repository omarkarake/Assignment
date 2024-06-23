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

class CreateSuperHero {
  constructor(name, secretIdentity, powers, weakness) {
    this.name = name;
    this.secretIdentity = secretIdentity;
    this.powers = powers;
    this.weakness = weakness;
  }
  // Using prototypal inheritance
  usePower(powerName) {
    console.log(`${this.name} is so ${powerName ? powerName : this.powers[0]}`);
  }

  revealIdentity() {
    console.log(`${this.name} real name is ${this.secretIdentity}`);
  }
}

class CreateSuperVillain extends CreateSuperHero {
  constructor(name, secretIdentity, powers, weakness) {
    super(name, secretIdentity, powers, weakness);
    this.name = name;
    this.secretIdentity = secretIdentity;
    this.powers = powers;
    this.weakness = weakness;
  }
}

// Creating instances of CreateSuperVillain
const villain1 = new CreateSuperVillain(
  "Dr. Chaos",
  "Victor Von Doom",
  ["Mind Control", "Telekinesis"],
  "Overconfidence"
);

const villain2 = new CreateSuperVillain(
  "The Phantom",
  "Lara Black",
  ["Invisibility", "Intangibility"],
  "Bright Light"
);

const villain3 = new CreateSuperVillain(
  "Inferno",
  "Alex Blaze",
  ["Pyrokinesis", "Flight"],
  "Water"
);

const villain4 = new CreateSuperVillain(
  "Frostbite",
  "Nina Frost",
  ["Cryokinesis", "Ice Constructs"],
  "Heat"
);

// Creating instances of CreateSuperHero
const hero1 = new CreateSuperHero(
  "Captain Thunder",
  "Jake Storm",
  ["Super Strength", "Lightning Manipulation"],
  "Energy Drain"
);

const hero2 = new CreateSuperHero(
  "Shadow Hunter",
  "Mia Night",
  ["Shadow Manipulation", "Stealth"],
  "Bright Light"
);

const hero3 = new CreateSuperHero(
  "Aqua Guardian",
  "Liam Tide",
  ["Hydrokinesis", "Underwater Breathing"],
  "Dehydration"
);

const hero4 = new CreateSuperHero(
  "Solar Flare",
  "Ava Ray",
  ["Solar Energy Manipulation", "Flight"],
  "Lunar Eclipse"
);

const superVillains = [villain1, villain2, villain3, villain4];
const superHeroes = [hero1, hero2, hero3, hero4];

superHeroes.forEach((hero) => {
  console.log(hero.name);
});

superVillains.filter((villain) => {
  console.log(
    villain.weakness === "Overconfidence"
      ? villain
      : "no villain with overconfidence"
  );
});
