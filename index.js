const shareBtn = document.querySelector(".share-button");
const shareSection = document.querySelector(".share");
const closeBtn = document.querySelector(".share-section_share-button");
const openState = document.querySelector(".first-share-button");
const closeState = document.querySelector(".close-state")

shareBtn.addEventListener("click", function () {
  if (shareSection.style.display === "none") {
    shareSection.style.display = "flex";
  } else {
    shareSection.style.display = "none";
  }
});

shareBtn.addEventListener("click", function () {
  if (shareSection.style.display === "none") {
    shareBtn.style.backgroundColor = "hsl(210, 46%, 95%)";
    openState.style.fill = "hsl(214, 17%, 51%)";
  } else {
    shareBtn.style.backgroundColor = "hsl(214, 17%, 51%)";
    openState.style.fill = "hsl(210, 46%, 95%)";
  }
});

closeBtn.addEventListener("click", function () {
  if (shareSection.style.display === "none") {
    shareSection.style.display = "flex";
  } else {
    shareSection.style.display = "none";
  }
});

closeBtn.addEventListener("click", function () {
  if (shareSection.style.display === "none") {
    closeBtn.style.backgroundColor = "hsl(214, 17%, 51%)";
    closeState.style.fill = "hsl(210, 46%, 95%)";
    shareBtn.style.backgroundColor = "hsl(210, 46%, 95%)";
    openState.style.fill = "hsl(214, 17%, 51%)";
  } else {
    closeBtn.style.backgroundColor = "hsl(210, 46%, 95%)";
    closeState.style.fill = "hsl(214, 17%, 51%)";
  }
}
);