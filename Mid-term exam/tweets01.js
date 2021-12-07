for (let i = 0;i < tweets.length;i++){
  answer.innerHTML += `<p>
<img>${tweets[i].avatar}</img>
<b>${tweets[i].name}</b>
  ${tweets[i].message}
  <i>${tweets[i].tweetedAt}</i>
  </p>`;
}
answer.innerHTML = `<ul>${answer.innerHTML}</ul>`;

function changeAll(){
  for (let i = 0;i < tweets.length;i++){
    answer.innerHTML += `<p>
<img src="https://morimorihoge.github.io/teu2019f/images/omocha_robot.png" alt="sg" width="50" height="70">
<b>${tweets[i].name}</b>
  ${tweets[i].message}
  <i>${tweets[i].tweetedAt}</i>
  </p>`;
  }
}

function changeSaburo(){
  for (let i = 0;i < tweets.length;i++){
    answer.innerHTML += `<p>
<img src="https://morimorihoge.github.io/teu2019f/images/omocha_robot.png" alt="sg" width="50" height="70">
<b>${tweets[i].name}</b>
  ${tweets[i].message}
  <i>${tweets[i].tweetedAt}</i>
  </p>`;
  }
}

function changeJiro(){
  for (let i = 0;i < tweets.length;i++){
    answer.innerHTML += `<p>
<img src="https://morimorihoge.github.io/teu2019f/images/idol_fan_penlight_sougankyou.png" alt="sg" width="50" height="70">
<b>${tweets[i].name}</b>
  ${tweets[i].message}
  <i>${tweets[i].tweetedAt}</i>
  </p>`;
  }
}

function changeTaro(){
  for (let i = 0;i < tweets.length;i++){
    answer.innerHTML += `<p>
<img src="https://morimorihoge.github.io/teu2019f/images/mukiryoku_man.png" alt="sg" width="50" height="70">
<b>${tweets[i].name}</b>
  ${tweets[i].message}
  <i>${tweets[i].tweetedAt}</i>
  </p>`;
  }
}