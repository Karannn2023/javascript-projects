let userscore = 0;
let compscore = 0;
let drawscrore = 0;

let userresult = document.getElementById("userScore");
let compresult = document.getElementById("compScore");
let drawResult = document.getElementById("drawScore");

const finalResult = document.querySelector("#result");

const picture = document.querySelectorAll(".picture");
picture.forEach((pic) => {
  pic.addEventListener("click", function () {
    const choiceId = pic.getAttribute("id");
    playGame(choiceId);
  });
});

const playGame = function (choiceId) {
  // user choice
  console.log("user was clicked", choiceId);
  // computer choice
  const computerChoice = compChoice();
  console.log("computer was clicked", computerChoice);
  if (choiceId === computerChoice) {
    console.log("match was draw");
    drawscrore++;
    drawResult.innerText = drawscrore;
    finalResult.innerText = "THE MATCH WAS DRAW!";
    finalResult.style.backgroundColor = "black";
    finalResult.style.color = "white";
  } else if (
    (choiceId === "pic1" && computerChoice === "pic3") ||
    (choiceId === "pic2" && computerChoice === "pic1") ||
    (choiceId === "pic3" && computerChoice === "pic2")
  ) {
    console.log("user wins");
    userscore++;
    userresult.innerText = userscore;
    finalResult.innerText = "YOU WIN THE MATCH";
    finalResult.style.backgroundColor = "green";
    finalResult.style.color = "white";
  } else {
    console.log("comp wins");
    compscore++;
    compresult.innerText = compscore;
    finalResult.innerText = "YOU LOSE THE MATCH!";
    finalResult.style.backgroundColor = "red";
  }
};

const compChoice = function () {
  const compChoice = ["pic1", "pic2", "pic3"];
  const index = Math.floor(Math.random() * 3);
  return compChoice[index];
};
