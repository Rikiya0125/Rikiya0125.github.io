function doCheckAnswer() {
  let answer = "";
  let input = document.querySelector("#input_string");
  let list = Array.from(document.querySelectorAll(`li`));

  list.forEach(function (element){
    if (element.startsWith(`li`)){
      answer = "正解";
    }else {
      answer = "不正解";
    }
  })

}