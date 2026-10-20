/* Javascript課題1
* 変数を宣言してみよう

* No.1 */
const string = "hoge";

// No.2
const num = 69;

// No.3
const stock = 0;
const hasStock = stock > 0;

// No.4
let value;

// No.5
const date = null;

// No.6
const names = ["田中", "佐藤", "久保田", "鈴木", "河本"];

// No.7
const user = {
  id: 1,
  name: "yourName",
  age: 20,
};

// No.8
console.log (string);
console.log (num);
console.log(hasStock);
console.log(value);
console.log (date);
console.log(names);

/* 関数を作ってみよう
* No.1 */
// function myButton() {}

// No.2
// const myButton= () => {};

// No.3
const showValue = (value) => {
  console.log(value);
};

showValue("hoge");

// No.4
const add = (a, b) =>{
  return a + b;
};
console.log (add(1,2));

// No.5
const joinStrings = (str1, str2) => str1 + str2;
console.log (joinStrings("深澤", "永"));