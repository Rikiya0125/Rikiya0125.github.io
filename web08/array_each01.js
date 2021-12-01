let answer = document.querySelector("#answer");
let names = function (element){
  answer.innerHTML += `<li>${element}</li>`;
  console.log(element);
}
fruitNames.forEach(names);
answer.innerHTML = `<ul>${answer.innerHTML}</ul>`;