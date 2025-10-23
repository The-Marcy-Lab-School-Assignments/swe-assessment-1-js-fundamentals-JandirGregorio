/*
  Write your functions here!

  Each function should:
  - Be exported so tests can use it
  - Follow the exact specifications
  - Pass all test cases
  - Use descriptive variable names
  - Have no linting errors
*/

// ============================================
// Question 1: petJudger
// ============================================

const petJudger = (petBreed, petName) => {
  // Your code here
  if(!petBreed || !petName){
    console.log('Missing information. Please provide a valid pet.');
  }
  else if(petBreed === 'dog'){
    console.log(`I love dogs! ${petName} is so cute!`);
  } else if(petBreed === 'cat'){
    console.log(`I love cats! ${petName} is so cute!`);
  } else if(petBreed === 'turtle'){
    console.log(`Who doesn't love a good turtle? ${petName} is the tops.`);
  } else if(petBreed === 'snake'){
    console.log(`Not a fan, please take ${petName} and leave.`);
  } else {
    console.log('What an...interesting pet.');
  }
};

// ============================================
// Question 2: loopFromOneUpToAnother
// ============================================

const loopFromOneUpToAnother = (firstNum, secondNum) => {
  // Your code here
  // if(firstNum >= secondNum){
  //   console.log();
  // }
  for(let i = firstNum; i < secondNum; i++){
    console.log(i);
  }
};

// ============================================
// Question 3: shoutEveryLetterForLoop
// ============================================

const shoutEveryLetterForLoop = (str) => {
  // Your code here
  if(str.length > 0){
    for(let i = 0; i < str.length; i++){
      console.log(`${str[i].toUpperCase()}!`)
    }
  }
};

// ============================================
// Question 4: letterCaseCounts
// ============================================

const letterCaseCounts = (str) => {
  // Your code here
  const characters = {
    lowercase : 0,
    uppercase : 0,
    neither : 0
  };

  for(let i = 0; i < str.length; i++){
    const char = str[i];
    if(/[a-z]/.test(char)){
      characters['lowercase']++;;
    }
    else if(/[A-Z]/.test(char)){
      characters['uppercase']++;
    }
    else {
      characters['neither']++;
    }
  }
  return characters;
};

// ============================================
// Question 5: getNamesOfGreedyGnomes
// ============================================

const getNamesOfGreedyGnomes = (gnomes) => {
  // Your code here
  if (gnomes.length === 0){
    return [];
  }

  const arr = [];
  for(let i = 0; i < gnomes.length; i++){
      const gnome = gnomes[i];
      const length = gnome.stolenDecorations.length;
      if( length > 1){
        arr.push(gnome.name);
      }
  }
  return arr;
};

// ============================================
// Exports
// ============================================

module.exports = {
  petJudger,
  loopFromOneUpToAnother,
  shoutEveryLetterForLoop,
  letterCaseCounts,
  getNamesOfGreedyGnomes,
};
