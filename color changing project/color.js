const button = document.querySelectorAll(".button");
const body = document.querySelector("html");

button.forEach(function (btn1) {
  //   console.log(btn1);
  btn1.addEventListener("mouseover", function (btn2) {
    // console.log(btn2);
    // console.log(btn2.target);
    if (btn2.target.id === "grey") {
      body.style.backgroundColor = btn2.target.id;
    }
    if (btn2.target.id === "white") {
      body.style.backgroundColor = btn2.target.id;
    }
    if (btn2.target.id === "red") {
      body.style.backgroundColor = btn2.target.id;
    }
    if (btn2.target.id === "blue") {
      body.style.backgroundColor = btn2.target.id;
    }
    if (btn2.target.id === "yellow") {
      body.style.backgroundColor = btn2.target.id;
    }
    if (btn2.target.id === "black") {
      body.style.backgroundColor = btn2.target.id;
    }
  });
});

button.forEach((a) => {
  a.addEventListener("mouseout", (b) => {
    body.style.backgroundColor = "white";
  });
});
