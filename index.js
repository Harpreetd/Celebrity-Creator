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
//Oppgave 4.a function to delete celebrity
function deleteCeleb(i) {
  celebrities.splice(i, 1);
  showCelebrity(celebrities);
}
// Oppgave 4.b function to craete new celeb

let createCelebBtn = document.getElementById("create-celeb");
createCelebBtn.onclick = createCelebrity;
function createCelebrity() {
  let celebName = document.getElementById("celeb-name").value;
  let celebAge = document.getElementById("celeb-age").value;
  let celebGender = document.getElementById("celeb-gender").value;
  let celebProfession = document.getElementById("celeb-prof").value;
  console.log(celebProfession);
  let celebImg = "./assets/leonardo.jpg";
  // oppgave 5 Error handling in input fields
  if (celebName == "" || celebGender == "") {
    alert("Type in Input fields");
  } else if (isNaN(celebAge) || celebAge == "") {
    alert("Type in Age in numbers");
  } else if (
    celebProfession == "actor" ||
    celebProfession == "singer" ||
    celebProfession == "comedian"
  ) {
    celebrityArray.push({
      name: celebName,
      age: celebAge,
      profession: celebProfession,
      gender: celebGender,
      img: celebImg,
    });
    filteredCelebrityInfo(celebProfession);
  } else {
    alert("type one of these: actor / singer / comedian");
  }
}
