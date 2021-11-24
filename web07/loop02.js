function doFizzBuzz(){
let num =0;
let answer = "";
let modal = document.querySelector("#answer");
while (num <= 100){
  num++;
  if(num % 3 ===0) {
    answer = "Fizz";
  if (num % 5 ===0) {
      answer = "Buzz";
    if (num % 3 ===0 && num % 5 ===0) {
        answer = "FizzBuzz";
      }
    }
  }
  modal.innerHTML = answer;
}
}