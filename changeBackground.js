const body = document.body;
const button = document.getElementById("changeColorBtn");
const originalBackgroundColor = body.style.backgroundColor;
let isColorChanged = false;

button.onclick = function () {
  if (isColorChanged) {
    body.style.backgroundColor = originalBackgroundColor;
    isColorChanged = false;
  } else {
    body.style.backgroundColor = "#423f3b";
    isColorChanged = true;
  }
};
