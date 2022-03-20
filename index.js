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

let celebrities;
function filteredCelebrityInfo(profession) {
  celebrities = celebrityArray.filter(function (celebrity) {
    return celebrity.profession == profession;
  });
  console.log(celebrities);
}
function showCelebrity(celebrities) {
  let info = document.createElement("h1");
  document.body.append(info);
}
document.querySelector("#actors").addEventListener("click", function () {
  filteredCelebrityInfo("actor");
});
document.querySelector("#singers").addEventListener("click", function () {
  filteredCelebrityInfo("singer");
});
document.querySelector("#comedians").addEventListener("click", function () {
  filteredCelebrityInfo("comedian");
});
