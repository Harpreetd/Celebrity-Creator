//Oppgave 1
let celebrityArray = [
  { name: "Angelina Jolie", age: 46, profession: "actor", gender: "female" },
  { name: "Jude Law", age: 49, profession: "actor", gender: "male" },
  { name: "the Weeknd", age: 32, profession: "singer", gender: "male" },
  { name: "Ariana Grande", age: 28, profession: "singer", gender: "female" },
  { name: "Kewin Hart", age: 42, profession: "comedian", gender: "male" },
];
console.log(celebrityArray);
document.querySelector("#actors").addEventListener("click", function () {
  filteredCelebrityInfo("actor");
});
document.querySelector("#singers").addEventListener("click", function () {
  filteredCelebrityInfo("singer");
});
document.querySelector("#comedians").addEventListener("click", function () {
  filteredCelebrityInfo("comedian");
});
let celebrities;
// Oppgave 2
function filteredCelebrityInfo(category) {
  celebrities = celebrityArray.filter(function (celebrity) {
    return celebrity.profession == category;
  });
  console.log(celebrities);
  showCelebrity(celebrities);
}

let celebList = document.getElementById("celeb-list");
function showCelebrity(celebrities) {
  celebList.innerHTML = "";
  for (let i = 0; i < celebrities.length; i++) {
    celebList.innerHTML += `<div>${celebrities[i].name}</div>`;
  }
}
