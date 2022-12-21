const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];
let noSpecialCharacters = characters.slice(0, 62);
let specialCharacters = characters.slice(62, 92);
let noNumbers = characters.slice(52, 62);
let lettersOnly = characters.slice(0, 52);
let lettersCharacters = lettersOnly.concat(specialCharacters);
let passwordOneEl = document.getElementById("password1-el");
let passwordTwoEl = document.getElementById("password2-el");
let characterInput = document.getElementById("characterInput");
let toggleSpecial = document.querySelector("#toggleSpecial");
let toggleNumber = document.querySelector("#toggleNumber");
let copyPasswordElOne = document.querySelector(".copyPasswordOne");
let copyPasswordElTwo = document.querySelector(".copyPasswordTwo");

function generatePassword() {
  toggleSwitch();
  copyPassword();
}

const toggleSwitch = () => {
  let randomPasswordOne = [];
  let randomPasswordTwo = [];

  //if both are off return random alphanumeric
  if (!toggleNumber.checked && !toggleSpecial.checked) {
    for (let i = 0; i < characterInput.value; i++) {
      let randomIndexOne = Math.floor(Math.random() * lettersOnly.length);
      let randomIndexTwo = Math.floor(Math.random() * lettersOnly.length);
      randomPasswordOne.push(lettersOnly[randomIndexOne]);
      randomPasswordTwo.push(lettersOnly[randomIndexTwo]);
      passwordOneEl.textContent = randomPasswordOne.join(" ");
      passwordTwoEl.textContent = randomPasswordTwo.join(" ");
    }
    //this works
  } else if (!toggleSpecial.checked) {
    //if special off and number is on
    for (let i = 0; i < characterInput.value; i++) {
      randomIndexOne = Math.floor(Math.random() * noSpecialCharacters.length);
      randomIndexTwo = Math.floor(Math.random() * noSpecialCharacters.length);
      randomPasswordOne.push(noSpecialCharacters[randomIndexOne]);
      randomPasswordTwo.push(noSpecialCharacters[randomIndexTwo]);
      passwordOneEl.textContent = randomPasswordOne.join(" ");
      passwordTwoEl.textContent = randomPasswordTwo.join(" ");
    }
  } else if (!toggleNumber.checked) {
    for (let i = 0; i < characterInput.value; i++) {
      randomIndexOne = Math.floor(Math.random() * lettersCharacters.length);
      randomIndexTwo = Math.floor(Math.random() * lettersCharacters.length);
      randomPasswordOne.push(lettersCharacters[randomIndexOne]);
      randomPasswordTwo.push(lettersCharacters[randomIndexTwo]);
      passwordOneEl.textContent = randomPasswordOne.join(" ");
      passwordTwoEl.textContent = randomPasswordTwo.join(" ");
    } //this works
  } else {
    //if the special and number are toggled on THIS WORKS
    for (let i = 0; i < characterInput.value; i++) {
      randomIndexOne = Math.floor(Math.random() * characters.length);
      randomIndexTwo = Math.floor(Math.random() * characters.length);
      randomPasswordOne.push(characters[randomIndexOne]);
      randomPasswordTwo.push(characters[randomIndexTwo]);
      passwordOneEl.textContent = randomPasswordOne.join(" ");
      passwordTwoEl.textContent = randomPasswordTwo.join(" ");
    }
  }
};

const copyPassword = () => {
  copyPasswordElOne.innerHTML =
    '<button onclick="copyContentOne()">Copy Password</button>';
  copyPasswordElTwo.innerHTML =
    '<button class="copyPasswordTwo" onclick="copyContentTwo()">Copy Password</button>';
};

async function copyContentOne() {
  try {
    await navigator.clipboard.writeText(passwordOneEl.innerHTML);
    console.log("Content copied to clipboard");
    /* Resolved - text copied to clipboard successfully */
  } catch (err) {
    console.error("Failed to copy: ", err);
    /* Rejected - text failed to copy to the clipboard */
  }
}

async function copyContentTwo() {
  try {
    await navigator.clipboard.writeText(passwordTwoEl.innerHTML);
    console.log("Content copied to clipboard");
    /* Resolved - text copied to clipboard successfully */
  } catch (err) {
    console.error("Failed to copy: ", err);
    /* Rejected - text failed to copy to the clipboard */
  }
}

const reset = () => {
  passwordOneEl.textContent = "";
  passwordTwoEl.textContent = "";
  characterInput.value = "";
  toggleSpecial.checked = true;
  toggleNumber.checked = true;
  copyPasswordElOne.innerHTML = "";
  copyPasswordElTwo.innerHTML = "";
};
