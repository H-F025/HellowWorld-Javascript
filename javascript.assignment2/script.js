// No.1
const japanese = 100;
const math = 80;
const english = 75;
const science = 70;
const social = 80;

const total = japanese + math + english + science + social;
console.log(total);

// No.2
const result = 100000 - 80000;
console.log(result);

/*掛け算、割り算、インクリメント
* No.1 */
const cal = 32 * 64;
console.log(cal);

// No.2
const numbers = 10 / 2;
console.log(numbers);

// No.3
let num = 3;
num++;
console.log(num);

// No.4
let number = 0;
number--;
console.log(number);

/* 条件分岐を練習してみよう
* No.1 */
const moneyA = 8000;
const moneyB = 12000;

if (moneyA < moneyB) {
  console.log("B君の所持金の方が多いです");
}

// No.2
const moneysA = 8000;
const moneysB = 12000;
const moneysC = 3000;

if (moneysB > moneysA && moneysB > moneysC) {
  console.log("B君の所持金が一番多いです");
}

/*アラート、switch文
* No.1 */

// 要素の取得。getElementByIdでHTMLで定義した変数(id) "scoreBtn" "score" を取得し、jsでボタンと表示欄を操作できるようにする。
const scoreBtn = document.getElementById("scoreBtn");
const scoreText = document.getElementById("score");
// addEventListenerでクリックした際の動作({}の中の指示)を実行。
scoreBtn.addEventListener("click", () => {
  // ランダムな整数(floor)。
  // + 1 にすることで1〜100の整数の範囲からランダムになるようにする。
const score = Math.floor(Math.random() * 100) + 1;
// テンプレートリテラルで、scoreの値と"点"をつなげる。←テンプレートリテラルを使うことでコードを読みやすくする。
scoreText.textContent = `${score}点`;
// if文で、それぞれの条件に当てはまった場合の指示を実装。
if (score === 100) {
  alert("満点！！");
  } else if (score >= 80) {
  alert("合格です");
  } else if (score >= 30) {
  alert("赤点です");
  } else {
    alert("不合格です");
  }
});

// No.2

// 要素の取得。getElementByIdでHTMLで定義した変数(id)"prefInput"を取得し、jsから入力値を読み取れるようにする。
const prefInput = document.getElementById("prefInput");
// addEventListenerのchangeイベントを設定。テキスト欄に文字を入力し、Enterを押した際に発生。
// valueで今入力されている文字を取得。
prefInput.addEventListener("change", () => {
const value = prefInput.value;
// switch文を使い、それぞれの条件と判定をさせる。
// caseに当てはまる文字が入力されたときだけ、意図した判定がコンソールに表示される。
switch (value) {
  case "saitama":
    console.log("埼玉");
      break;
  case "tokyo":
    console.log("東京");
      break;
  case "kanagawa":
    console.log("神奈川");
      break;
  default:
    console.log("未確認");
  }
});

/* Mathオブジェクトを使ってみよう
*No.1 */
function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

console.log(getRandomNumber());

// No.2
const max = Math.max(1, 4, 6);
console.log(max);

// No.3
const min = Math.min(1, 4, 6);
console.log(min);

// for文を使用してループ処理を練習しましょう
// No.1
for (let i = 0; i < 10; i++) {
  console.log("実行");
}

// No.2
const items = ["apple", "banana", "cat"];
// let i = 0 でカウンター i を 0 から始める : 初期化(最初に1回だけ実行)
// items.length を使うことで後から要素が増えても自動で全て表示(ループ回数を直接指定しない(例: i < 3)
for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}

// No.3
const nums = [1, 2, 3];
let totals = 0;
// let i = 0 でカウンター i を 0 から始める : 初期化(最初に1回だけ実行)
// nums.length を使うことで後から要素が増えても自動で全て表示(ループ回数を直接指定しない(例: i < 3)
for (let i = 0; i < nums.length; i++) {
  totals += nums[i];
}

console.log(totals);

// No.4
const A = [1, "hoge", 2, "huga", 3, "piyo"];
// 結果を入れるための空の配列(numArray,strings)を用意
const numArray = [];
const strings = [];
// let i = 0 でカウンター i を 0 から始める : 初期化(最初に1回だけ実行)
// A.length を使うことで後から要素が増えても自動で全て表示(ループ回数を直接指定しない(例: i < 3)
for (let i = 0; i < A.length; i++) {
// typeof で各要素の型を調べ、"number" なら numArray に、"string" なら strings に push で追加
  if (typeof A[i] === "number") {
    numArray.push(A[i]);
  } else if (typeof A[i] === "string") {
    strings.push(A[i]);
  }
}

console.log(numArray);
console.log(strings);

// No.5
let totalArray = 0;

for (let i = 1; i <= 100; i++) {
// i % 2 === 0（2で割った余りが0）なら偶数なので、continue で total += i を実行せずに次へ進む
  if (i % 2 === 0) {
    continue; // 「今回のループの残りを飛ばして、次の回へ進む」という命令
  }
// 奇数のときだけ continue を通らないので、total に足される
  totalArray += i;
}

console.log(totalArray);

// 他の繰り返し文を使ってみましょう
// No.1
const words = ["apple", "banana", "cat"];

words.forEach((word) => {
  console.log(word);
});

// No.2
let i = 0;

while (i < 10) {
  console.log("実行");
  i++;
}

// No.3
// for: 回数が決まっている繰り返し(1~5を取得したいなど)。途中で止めたい、処理を変えたい場合はbreak / continueを使用。
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// forEach: 配列の全要素を取得したい場合。break / continueは使えない。
const fruits = ["りんご", "バナナ", "みかん"];

fruits.forEach((fruit) => {
  console.log(fruit);
});

// while: いつループが終わるかはわからないが、終わる条件だけ決まっている場合
// break / continueは使える
let numberArray = 1;
// 数字が10を超えるまで2倍にする
while (numberArray <= 10) {
  console.log(numberArray);
  numberArray = numberArray * 2;
}

// 配列メソッドを練習しましょう
// No.1
// forEach → 処理するだけで何も返さない
// map     → 処理した結果を新しい配列として返す
const numbersArray = [2, 4, 6, 8];
const doubled = numbersArray.map((num) => num * 2);

console.log(doubled);

// No.2
// someメソッドは条件に1つでも当てはまるものがあればtrue、1つもなければfalse。
// 途中で条件に合うものがあればそこで終了
const values = [2, 4, 6, 7];
//  num % 2 !== ← 2 で割った余りが 0 ではない = 奇数であるかの判別
const hasOdd = values.some((num) => num % 2 !== 0);

console.log(hasOdd);

// No.3
// everyメソッドは全ての条件が当てはまった場合はtrue、1つでも当てはまらなければfalse
const submissions = [
  { id: 2, hasSubmitted: true },
  { id: 3, hasSubmitted: false }, /* ←ここでfalseが返るので終了 */
  { id: 4, hasSubmitted: true },  /* ←ここは調べない */
];

const allSubmitted = submissions.every((item) => item.hasSubmitted);

console.log(allSubmitted);

// No.4
// filterは条件に合うものだけを取得し、新しい配列を返す
// filterはsome,everyメソッドと違い、全ての要素を調べる
const tasks = [
  { id: 2, hasSubmitted: true },
  { id: 3, hasSubmitted: false },
  { id: 4, hasSubmitted: true },
];

const submittedList = tasks.filter((item) => item.hasSubmitted);

console.log(submittedList);

// No.5
const records = [
  { id: 323, hasSubmitted: true },
  { id: 111, hasSubmitted: false },
  { id: 268, hasSubmitted: true },
];
// a.id - b.id 昇順に並べ替える(例: 1,2,3,4,5)
// b.id - a.id 降順に並べ替える(例: 5,4,3,2,1)
records.sort((a, b) => a.id - b.id);

console.log(records);