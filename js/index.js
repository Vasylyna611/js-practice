//https://www.codewars.com/kata/keep-hydrated-1/train/javascript
function litres(time) {
  return Math.floor(Math.floor(time) * 0.5);
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
  return (laLigaGoals + copaDelReyGoals + championsLeagueGoals)
}