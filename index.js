//Oppgave 1
let celebrityArray = [
  {
    name: "Angelina Jolie",
    age: 46,
    profession: "actor",
    gender: "female",
    img: "./assets/angelina-jolie.jpg",
  },
  {
    name: "Jude Law",
    age: 49,
    profession: "actor",
    gender: "male",
    img: "./assets/jude-law.jpg",
  },
  {
    name: "the Weeknd",
    age: 32,
    profession: "singer",
    gender: "male",
    img: "./assets/the-weeknd.jpg",
  },
  {
    name: "Ariana Grande",
    age: 28,
    profession: "singer",
    gender: "female",
    img: "./assets/ariana_grande.jpg",
  },
  {
    name: "Kewin Hart",
    age: 42,
    profession: "comedian",
    gender: "male",
    img: "./assets/kewin-hart.jpg",
  },
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
    // oppgave 3
    celebList.innerHTML += `<div class="card"><img src="${
      celebrities[i].img
    }"><h2>${celebrities[i].name.toUpperCase()}</h2><h3>${celebrities[
      i
    ].profession.toUpperCase()}</h3>
    <button onclick="deleteCeleb(${i})">Delete</button></div>`;
  }
}
//function to delete celebrity
function deleteCeleb(i) {
  celebrities.splice(i, 1);
  showCelebrity(celebrities);
}
