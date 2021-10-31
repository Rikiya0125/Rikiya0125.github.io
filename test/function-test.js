console.log("hoge");
function logHello(){
  console.log("Hello");
}
logHello("一回目");

/* 演習 */
function samples(sample1,sample2 ,sample3 ){
  console.log(`sample1: ${sample1}`);
  console.log(`sample2: ${sample2}`);
  console.log(`sample3: ${sample3}`);
}
samples(1,2,3);

function samples2(sample1 = "サンプル"){
  console.log(`sample1: ${sample1}`);
}
samples2("サンプル2");

/*  演習 */
function personal({name="阿部力也",old=19}){
  console.log("名前は"+name+"です。");
  console.log("年齢は"+old+"歳です。");
}
personal({old:19,name:"阿部力也"});

/* 演習 */
function calculation(number){
  return number
}
console.log(calculation(2021*1010));