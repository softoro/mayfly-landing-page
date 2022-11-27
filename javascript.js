function quizButton() {
  let time = prompt("How long does a Mayfly live?");
  time = time.toLowerCase().trim();
  if (time === "a day" || time === "two days" || time === "5 minutes") {
    alert("That is correct 🦗");
  } else {
    alert(
      "Mayflies only live for 24 hours and hold the record for the shortest life cycle on earth 🦗"
    );
  }
}
let testButton = document.querySelector("button");
testButton.addEventListener("click", quizButton);
