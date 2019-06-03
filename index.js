var dodger = document.getElementById("dodger");

// Move to the left

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace("px", "");
  var left = parseInt(leftNumbers, 10);
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

// Now move to the right

function moveDodgerRight() {
  var leftNumbers = dodger.style.left.replace("px", "");
  var left = parseInt(leftNumbers, 10);
  if (left > 0) {
    dodger.style.left = `${left + 1}px`;
  }
}

 // Keys Control

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});


document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});
