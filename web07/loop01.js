function doLoop(){
  let sum = 0;
  let i =0;
  while (i <= 10000){
    sum= sum + i;
    i++;
    if (num >= 50000){
      break;
    }
  }
  document.querySelector("#answer").innerHTML = sum;
}

