/*
  DEBUGGING ACTIVITY: Score Tracker

  You've been hired by a small game company to help debug their score-tracking system.

  The code SHOULD:
  1. Keep track of several players and their scores
  2. Increase or decrease a player's score
  3. Reset all scores to zero
  4. Return the name of the current top scorer

  However, some functionality isn't working correctly.

  YOUR TASKS:
  1. Run this file and observe what happens
  2. Identify 3 bugs in the code
  3. Fix all 3 bugs
  4. Record a 2-4 minute video explaining:
  - What you expected to happen
  - The bugs you found (what's wrong and why)
  - The fixes you implemented

  ADD YOUR LOOM LINK HERE: https://www.loom.com/share/ee32c11aa19b4a6b80761c9279c382de
*/

const players = [
  { name: 'Taylor', score: 0 },
  { name: 'Jordan', score: 0 },
  { name: 'Alex', score: 0 },
  { name: 'Morgan', score: 0 },
];

// increaseScore takes a name and looks for a match in the array of players
const increaseScore = (name) => {
  // traverse the array of players
  for (let i = 0; i < players.length; i++) {
    // if the the player at index i matches the name passed into the function, add 1 to the score
    if (players[i].name === name) {
      players[i].score += 1;
    }
  }
}
// decreaseScore takes a name and looks for a match in the array of players
const decreaseScore = (name) => {
  // traverse the array of players
  for (let i = 0; i < players.length; i++) {
    // if the the player at index i matches the name passed into the function, add 1 to the score
    if (players[i].name === name) {
      players[i].score -= 1;
    }
  }
}

// this function resets all scores to 0
const resetAllScores = () => {
  for (let i = 0; i < players.length; i++) {
    // create variable to hold current player
    const player = players[i];
    resetSingleScore(player);
  }
}
// takes in a player's name and reset the score to 0
const resetSingleScore = (player) => {
  player.score = 0;
}

// This function looks for the player with the highest score
const getTopScorer = () => {
  // creates two variable containing the current max score
  // and the variable that will hold the top player
  let maxScore = -Infinity;
  let topPlayer;

  // traverse the array of players
  for (let i = 0; i < players.length; i++) {
    // if the current score > current max score, assign maxScore to the score at index i
    // assign topPlayer to the player's name with the highest score
    if (players[i].score > maxScore) {
      maxScore = players[i].score;
      topPlayer = players[i].name;
    }
  }
  // return the player with the highes score
  return topPlayer;
}

// ============================================
// Testing the functions
// ============================================

increaseScore('Alex'); // Alex's score = 1
increaseScore('Alex'); // Alex's score = 2
decreaseScore('Jordan'); // Jordan's score = -1
console.log(players); // logs all players and their scores

/* players = [
  { name: 'Taylor', score: 0 },
  { name: 'Jordan', score: -1},
  { name: 'Alex', score: 2},
  { name: 'Morgan', score: 0 },
]
*/
console.log(getTopScorer()); // gets the player with the highest score, it should return Alex

resetAllScores(); // it resets all scores to 0
console.log(players); // logs player's names and scores
/*
players = [
  { name: 'Taylor', score: 0 },
  { name: 'Jordan', score: 0},
  { name: 'Alex', score: 0},
  { name: 'Morgan', score: 0 },
];
*/
console.log(getTopScorer()); // It should return the first player with score 0 - Taylor

// ============================================
// Exports
// ============================================

module.exports = {
  players,
  increaseScore,
  decreaseScore,
  resetAllScores,
  getTopScorer,
};
