const catProfiles = [
  {
    img: "http://placekitten.com/100/100",
    catName: "Tom",
    feeling: "happy",
  },
  {
    img: "http://placekitten.com/100/105",
    catName: "Billy",
    feeling: "Okay",
  },
  {
    img: "http://placekitten.com/100/110",
    catName: "Ego",
    feeling: "devious",
  },
  {
    img: "http://placekitten.com/100/120",
    catName: "Bobby",
    feeling: "idk",
  },
];

const img = document.querySelector("#catPhoto");
const catName = document.querySelector(".catName");
const feeling = document.querySelector(".feeling");
const left = document.querySelector(".left");
const random = document.querySelector(".random");
const right = document.querySelector(".right");

let currentCat = 0;

const displayCatProfile = () => {
  const item = catProfiles[currentCat];
  img.src = item.img;
  catName.textContent = item.catName;
  feeling.textContent = item.feeling;
};

window.addEventListener("DOMContentLoaded", () => {
  displayCatProfile();
});

left.addEventListener("click", () => {
  currentCat--;
  if (currentCat < 0) {
    currentCat = catProfiles.length - 1;
  }
  displayCatProfile();
});

right.addEventListener("click", () => {
  currentCat++;
  if (currentCat > catProfiles.length - 1) {
    currentCat = 0;
  }
  displayCatProfile();
});

random.addEventListener("click", () => {
  currentCat = Math.trunc(Math.random() * catProfiles.length);
  displayCatProfile();
});
