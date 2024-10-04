const detailsElements = document.querySelectorAll("details");

function closeOtherDetails(openedDetails) {
  detailsElements.forEach((details) => {
    if (details !== openedDetails) {
      details.removeAttribute("open");
      const arrowIcon = details.querySelector(".arrow-icon");
      if (arrowIcon) {
        arrowIcon.style.transform = "rotate(0deg)";
      }
    }
  });
}

detailsElements.forEach((details) => {
  const arrowIcon = details.querySelector(".arrow-icon");
  details.addEventListener("toggle", function () {
    if (details.open) {
      closeOtherDetails(details);
      arrowIcon.style.transform = "rotate(-90deg)";
    } else {
      arrowIcon.style.transform = "rotate(0deg)";
    }
  });
});
