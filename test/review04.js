function hello(){
  console.log("こんにちはこんにちは");
}
hello();

function hellosomeone(name){
  console.log(`こんにちは${name}さん`);
}
hellosomeone("引数1");

function helloCircleArea(radius){
  console.log(radius * radius * 3.14);
}
helloCircleArea(3);

function helloRectangleArea(width, height){
  console.log(width * height);
}
helloRectangleArea(2,5);

function circleArea(radius){
  return radius * radius * 3.14;
}
console.log(`circleArea(3):${circleArea(3)}`);

function rectangleArea(width, height){
  return width * height;
}
console.log(`rectangleArea(2, 5):${rectangleArea(2, 5)}`);