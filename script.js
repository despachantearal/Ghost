const facts = [
  "Ghost stories exist in many cultures worldwide.",
  "Some people believe ghosts are spirits of the dead.",
  "Haunted places are popular in folklore.",
  "Ghost sightings are often reported at night.",
  "Paranormal investigations study ghost activity."
];

function showFact() {
  const random = Math.floor(Math.random() * facts.length);
  document.getElementById("fact").innerText = facts[random];
}

function scare() {
  alert("👻 Boo! A ghost has appeared!");
}
