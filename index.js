const allBtns = document.querySelectorAll("button");
const descriptionBox = document.querySelector(".description-box"); // Updated class name
const overlay = document.querySelector(".overlay");

let winWidth = window.innerWidth;
let winHeight = window.innerHeight;

window.addEventListener("resize", () => {
  winWidth = window.innerWidth;
  winHeight = window.innerHeight;
});

const btnExplanation = [
  { content: "A car is a vehicle with four wheels that is powered by an engine." },
  { content: "A train is a series of connected railway cars that transport people or goods." },
  { content: "A phone is a device used for making calls and sending messages." },
  { content: "A TV is a television set used for watching broadcasts." },
  { content: "A house is a building where people live." },
  { content: "Clothes are items of clothing that people wear." },
  { content: "A school is an institution where students receive education." },
];

const descriptionBoxPos = descriptionBox.getBoundingClientRect();

allBtns.forEach((btn, idx) => {
  const btnPos = btn.getBoundingClientRect();
  console.log(btnPos.right);
  btn.addEventListener("click", () => {
    // Show the explanation for the button based on the index in the array
    descriptionBox.textContent = btnExplanation[idx].content;

    // Make the overlay visible if it isn't already
    if (!overlay.classList.contains("active")) overlay.classList.add("active");

    // Move the description box to a position near the button that was clicked
    descriptionBox.style.bottom = `${
      winHeight - btnPos.bottom - descriptionBoxPos.height - 50
    }px`;
    descriptionBox.style.right = `${winWidth - btnPos.right - descriptionBoxPos.width}px`;
  });
});

overlay.addEventListener("click", () => {
  descriptionBox.style.bottom = "10px";
  descriptionBox.style.right = "10px";
  overlay.classList.remove("active");
  descriptionBox.textContent = "content";
});
