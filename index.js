let celebrityArray = [
  { name: "Angelina Jolie", age: 46, profession: "actor", gender: "female" },
  {
    name: "Jude Law",
    age: 49,
    profession: "actor",
    gender: "male",
  },
  {
    name: "the Weeknd",
    age: 32,
    profession: "singer",
    gender: "male",
  },
  {
    name: "Ariana Grande",
    age: 28,
    profession: "singer",
    gender: "female",
  },
  {
    name: "Kewin Hart",
    age: 42,
    profession: "comedian",
    gender: "male",
  },
];
console.log(celebrityArray);

let actorsBtn = document.getElementById("actors");
let singersBtn = document.getElementById("singers");
let comediansBtn = document.getElementById("comedians");

function filteredCelebrityInfo(profession) {
  return celebrityArray.filter(
    (celebrity) => celebrity.profession == profession
  );
}
function showCelebrity() {
  console.log(filteredCelebrityInfo("actor"));
}
actorsBtn.onclick = showCelebrity;
