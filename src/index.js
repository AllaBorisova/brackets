module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let openBracket = [];
  let closeBracket = {};

   for (let element in bracketsConfig) {
     openBracket.push(bracketsConfig[element][0]);
     closeBracket[bracketsConfig[element][1]] = bracketsConfig[element][0];
   }

   for (let i = 0; i < str.length; i++){
      if (stack.length === 0){
         stack.push(str[i]);
      } else {
        if (closeBracket[str[i]] === stack[stack.length-1]){
         stack.pop(); 
        } else {
          stack.push(str[i]);
        }
      }
   }
   
  if (stack.length === 0){
    return true;
  } else {
    return false;
  }
  
}
