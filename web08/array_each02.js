let answer = document.querySelector("#answer");
let sentence = function (element){
  answer.innerHTML += `<li>
<b>${element.name}</b>
  ${element.message}
  <i>${element.tweetedAt}</i>
  </li>`;
}
tweets.forEach(sentence);
answer.innerHTML = `<ul>${answer.innerHTML}</ul>`;
