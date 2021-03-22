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

//https://www.codewars.com/kata/find-the-first-non-consecutive-number/train/javascript
function firstNonConsecutive (arr) {
  for(let i = 0; i < arr.length; i++) {
    if(i == arr.length - 1) {
      return null;
    }
    if (arr[i] + 1 != arr[i + 1]) {
      return arr[i + 1]
    }
  }
}

//22.03
//https://www.codewars.com/kata/55a2d7ebe362935a210000b2
class SmallestIntegerFinder {
  findSmallestInt(args) {
    let min = args[0]
    
    for(let i = 0; i < args.length; i++) {
      let value = args[i]
      min = (value < min) ? value : min
    }
    return min
  }
}

//https://www.codewars.com/kata/58e43389acfd3e81d5000a88
function circleCircumference(circle) {
  return 2 * Math.PI * circle.radius;
}

//https://www.codewars.com/kata/56f935002e6c0d55fa000d92
class Shark extends Animal {
constructor(name, age, status) {
super(name, age, 0, "shark", status);
 }
}

class Cat extends Animal {
constructor(name, age, status) {
super(name, age, 4, "cat", status);
}
introduce() {
return super.introduce() + '  Meow meow!';
 }
}

class Dog extends Animal {
constructor(name, age, status, master) {
super(name, age, 4, "dog", status);
this.master = master;
}
greetMaster() {
return `Hello ${this.master}` ;
 }
}

//https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript
function giveMeFive(obj) {
  let arr = [];
    for (let key in obj) {
      if (key.length == 5) arr.push(key);
      if (obj[key].length == 5 ) arr.push(obj[key]);
    }
    return arr;
    }
