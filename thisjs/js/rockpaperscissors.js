const plays = ["rock", "paper", "scissors"];
let playgame = confirm("Shall we play rock,paper, or Scissors ?");
if (playgame) {
  const compnum = Math.floor(Math.random() * plays.length);
  const compchoice = plays[compnum];
  const choice = prompt("please type in your hand ROCK,PAPER,SCISSORS");
  if (choice !== null) {
    const playerone = choice.toLowerCase().trim();
    if (plays.includes(playerone)) {
      if (playerone === "rock" && compchoice === "scissors") {
        alert(
          "You play: " +
            choice +
            "\n" +
            "Computer Plays:" +
            compchoice +
            "\n" +
            " That is a crush Rock crushes Scissors \n" +
            "YOU WINNNN !!!",
        );
      } else if (playerone === "scissors" && compchoice === "paper") {
        alert(
          "You play: " +
            choice +
            "\n" +
            "Computer Plays:" +
            compchoice +
            "\n" +
            "That is a slash Scissors Cuts Papers \n" +
            "YOU WINNNN !!!",
        );
      } else if (playerone === "paper" && compchoice === "rock") {
        alert(
          "You play:" +
            choice +
            "\n " +
            "Computer Plays:" +
            compchoice +
            "\n" +
            "That is a Wrap Paper Wraps Rock \n" +
            "YOU WINNNN !!!",
        );
      } else if (playerone === compchoice) {
        alert(
          "You play:" +
            choice +
            "\n " +
            "Computer Plays:" +
            compchoice +
            "\n" +
            "That is a Draw !!!",
        );
      } else {
        alert(
          "You play:" +
            choice +
            "\n" +
            " Computer Plays:" +
            compchoice +
            "\n" +
            " No explanation Needed you loser",
        );
      }
    } else {
      alert(
        "You are not playing the Game\n Can't you read Play ROCK , PAPER ,OR SCISSORS",
      );
    }
  } else {
    alert("Don't press cancel I can kill ");
  }
} else {
  alert("Ok, maybe next time ");
}
