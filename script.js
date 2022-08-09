const listItems = document.getElementsByClassName("menu");
for (let x = 0; x < listItems.length; x++) {
  listItems[x].addEventListener("click", () => {
    console.log("===you just clicked==>", listItems[x].innerText);
  });
  console.log(listItems.innerText);
}
const btnNext = document.getElementsByClassName("nextBtn");
btnNext.addEventListener("click", () => {
  console.log("===you are going to the next page");
});
const btnPrev = document.getElementsByClassName("prevBtn");
btnPrev.addEventListener("click", () => {
  console.log("===you are going to the next page");
});
