/* DOMを練習してみよう
* No.1 */
const container = document.getElementById("container");
console.log(container);

// No.2
const text = document.querySelector(".text");
console.log(text);

// No.3
const p = document.createElement("p");
console.log(p);

// No.4
p.textContent = "新しく追加した段落です";

container.appendChild(p);

/* イベントハンドリングの練習
* No.1 */
const handleClick = () => {
  console.log("click");
};

myButton.addEventListener("click", handleClick);

// No.2
document.addEventListener("scroll", () => {
  console.log("scroll");
});

// No.3
const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", () => {
  const p = document.createElement("p");
  p.textContent = "子要素が追加されました！";
  container.appendChild(p);
});