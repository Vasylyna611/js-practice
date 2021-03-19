//https://www.codewars.com/kata/keep-hydrated-1/train/javascript
function litres(time) {
  return Math.floor(time * 0.5);
}
//https://www.codewars.com/kata/grasshopper-personalized-message/train/javascript
function greet (name, owner) {
  if (name == owner) {
   return 'Hello boss'
  } else {
    return 'Hello guest'
  }
}
//https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}
//https://www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript
function move (position, roll) {
  return position + roll * 2;
}

//19.03
//https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
var min = function(list){
    return Math.min.apply(null, list); 
}

var max = function(list){
    return Math.max.apply(null, list);
}

//https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
function min(arr, toReturn) {
  let minValue = Math.min.apply(null, arr)
   return (toReturn == 'value') ? minValue : arr.indexOf(minValue);
}

//https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
function DNAtoRNA(dna) {
  return dna.replace(/T/g,'U');
}

//https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
function stringToArray(string){
const newArray = string.split(" ");
  return newArray;
}