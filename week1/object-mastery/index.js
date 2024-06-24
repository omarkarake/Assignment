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
  constructor(name, secretIdentity, powers, weakness, image) {
    this.name = name;
    this.secretIdentity = secretIdentity;
    this.powers = powers;
    this.weakness = weakness;
    this.image = image;
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
  constructor(name, secretIdentity, powers, weakness, image) {
    super(name, secretIdentity, powers, weakness, image);
  }
}

// Superheroes
const superheroes = [
  new CreateSuperHero(
    "Superman",
    "Clark Kent",
    ["Super strength", "Flight", "X-ray vision", "Heat vision"],
    "Kryptonite",
    "https://images.wallpapersden.com/image/download/superman-arena-of-valor-art_bWxna2uUmZqaraWkpJRnZW5rrWZnZm4.jpg"
  ),
  new CreateSuperHero(
    "Spider-Man",
    "Peter Parker",
    ["Wall-crawling", "Super strength", "Spider-sense", "Web-shooting"],
    "Ethyl chloride pesticide",
    "https://4kwallpapers.com/images/wallpapers/marvels-spider-man-2880x1800-11990.jpeg"
  ),
  new CreateSuperHero(
    "Wonder Woman",
    "Diana Prince",
    ["Super strength", "Flight", "Combat skills", "Lasso of Truth"],
    "Piercing weapons",
    "https://c4.wallpaperflare.com/wallpaper/840/876/23/wonder-woman-dc-comics-gal-gadot-sword-wallpaper-preview.jpg"
  ),
];

// Supervillains
const supervillains = [
  new CreateSuperVillain(
    "Joker",
    "Unknown",
    ["High intelligence", "Expert chemist", "Master of disguise"],
    "His own insanity",
    "https://w0.peakpx.com/wallpaper/820/365/HD-wallpaper-joker-gun-shot.jpg"
  ),
  new CreateSuperVillain(
    "Lex Luthor",
    "Alexander Joseph Luthor",
    ["Genius-level intellect", "Expert strategist", "Master manipulator"],
    "Ego and obsession with Superman",
    "https://c4.wallpaperflare.com/wallpaper/45/146/532/lex-luthor-dc-universe-online-wallpaper-preview.jpg"
  ),
  new CreateSuperVillain(
    "Green Goblin",
    "Norman Osborn",
    ["Super strength", "Regeneration", "Advanced technology"],
    "Mental instability",
    "https://c4.wallpaperflare.com/wallpaper/133/619/801/spider-man-green-goblin-norman-osborn-wallpaper-preview.jpg"
  ),
];

// Output the arrays to verify
console.log(superheroes);
superheroes.forEach((hero) => {
  console.log(hero.name === "Spider-Man");
});
console.log(supervillains);

// Function to update hero and villain
function updateHeroVillain() {
  const hero1 = document.querySelector(".hero1");
  const hero2 = document.querySelector(".hero2");
  const firstHeroName = document.querySelector(".first-hero-name");
  const secondHeroName = document.querySelector(".second-hero-name");

  const randomHero = Math.trunc(Math.random() * superheroes.length);
  const randomVillain = Math.trunc(Math.random() * supervillains.length);

  const randomHeroSelection = superheroes[randomHero];
  const randomVillainSelection = supervillains[randomVillain];

  hero1.style.backgroundImage = `url(${randomHeroSelection.image})`;
  hero2.style.backgroundImage = `url(${randomVillainSelection.image})`;
  firstHeroName.innerHTML = randomHeroSelection.name;
  secondHeroName.innerHTML = randomVillainSelection.name;

  console.log(randomHeroSelection.image);
  console.log(randomVillainSelection.image);
}

// Initial call to set the images and names
updateHeroVillain();

// Add event listener to the button
const fightingButton = document.querySelector(".fighting");
fightingButton.addEventListener("click", updateHeroVillain);
