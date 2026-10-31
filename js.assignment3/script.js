// No.1 JSON文字列をJavaScriptオブジェクトに変換しましょう
const jsonString = '{"name":"Taro", "age":42, "gender": "male"}';
// JSON.parse(jsonString)でjsが読み取れるオブジェクトに変換
// 変換したオブジェクトをpersonに代入
const person = JSON.parse(jsonString);

console.log(person);

// No.2 JavaScriptオブジェクトをJSON文字列に変換しましょう
const persons = { name: "Taro", Age: 13, gender: "male" };
const jsonStrings = JSON.stringify(persons);

console.log(jsonStrings);

// フォームバリデーションを実装しましょう
// 入力欄の取得
const nameInput = document.getElementById("nameInput");
const ageInput = document.getElementById("ageInput");
const emailInput = document.getElementById("emailInput");
const phoneInput = document.getElementById("phoneInput");

// エラー表示欄の取得
const nameError = document.getElementById("nameError");
const ageError = document.getElementById("ageError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");

const button = document.getElementById("button");

// 正規表現
// 全角文字のみ。姓と名の間のスペース（半角・全角）は1つまで許可
const nameRegex = /^[^\x01-\x7E\uFF61-\uFF9F]+([ 　][^\x01-\x7E\uFF61-\uFF9F]+)?$/;
// 半角数字のみ。先頭の0は禁止（"0"単体はOK、"001"はNG）
const ageRegex = /^(0|[1-9][0-9]*)$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// 0始まりの半角数字10桁（固定電話）または11桁（携帯電話）。ハイフンなし
const phoneRegex = /^0[0-9]{9,10}$/;

button.addEventListener("click", () => {
  // 前回のエラーメッセージを消す
  nameError.textContent = "";
  ageError.textContent = "";
  emailError.textContent = "";
  phoneError.textContent = "";

  // 前後の空白を除去した入力値
  const name = nameInput.value.trim();
  const age = ageInput.value.trim();
  const email = emailInput.value.trim();
  const phone = phoneInput.value.trim();

  // エラーが1つでもあるかどうか
  // エラーがない場合だけ送信できる
  let hasError = false;

  // 名前
  if (name === "") {
    nameError.textContent = "名前を入力してください";
    hasError = true;
    // 先頭に ! で条件に一致しない場合にエラーを返す
    // Regex は正規表現の変数名
  } else if (!nameRegex.test(name)) {
    nameError.textContent = "名前は全角で入力してください";
    hasError = true;
  }

  // 年齢（0〜120）
  if (age === "") {
    ageError.textContent = "年齢を入力してください";
    hasError = true;
    // 先頭に ! で条件に一致しない場合にエラーを返す
    // Regex は正規表現の変数名
  } else if (!ageRegex.test(age)) {
    ageError.textContent = "年齢は半角数字で入力してください";
    hasError = true;
  } else if (Number(age) > 120) {
    ageError.textContent = "年齢は0〜120の範囲で入力してください";
    hasError = true;
  }

  // メールアドレス
  if (email === "") {
    emailError.textContent = "メールアドレスを入力してください";
    hasError = true;
    // 先頭に ! で条件に一致しない場合にエラーを返す
    // Regex は正規表現の変数名
  } else if (!emailRegex.test(email)) {
    emailError.textContent = "正しいメールアドレスを入力してください";
    hasError = true;
  }

  // 電話番号（固定電話10桁・携帯電話11桁）
  if (phone === "") {
    phoneError.textContent = "電話番号を入力してください";
    hasError = true;
    // 先頭に ! で条件に一致しない場合にエラーを返す
    // Regex は正規表現の変数名
  } else if (!phoneRegex.test(phone)) {
    phoneError.textContent = "電話番号はハイフンなしの半角数字10桁または11桁で入力してください";
    hasError = true;
  }

  // エラーがあれば送信しない
  if (hasError) {
    return;
  }

  // ここに送信処理を書く
  alert("送信しました");
});