function checkAge(){
  let num = Number(document.querySelector("#age").value);
  let answer = document.querySelector("#answer");
  if (num <= 0){
    answer.innerHTML = "エラー";
  }else if(num < 20){
    answer.innerHTML = "未成人";
  }else if (20 <= num && num <65){
    answer.innerHTML = "成人"
  }else if (num >= 65) {
    answer.innerHTML = "高齢者"
  }

}