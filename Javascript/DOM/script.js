let spinning = false;

//hoisting
toggleFan()

function toggleFan() {
  const fan = document.querySelector("#fan");

  if (spinning) {
    fan.classList.remove("spin");
    spinning = false;
  } else {
    fan.classList.add("spin");
    spinning = true;
  }
}





//event listners