const startGame = document.getElementById("game-input");
const finGame = document.getElementById("game-output");
const randomNum = document.getElementById('random-number')
const startResult = [];

function updateCounter() {
    finGame.textContent = 'Quantity';
}

function getRandom() {
    const keyboardChars = "ЙЦУКЕНГШЩЗХЇФІВАПРОЛДЖЄЯЧСМИТЬБЮйцукенгшщзхїфівапролджєячсмитьбю0123456789!@#$%^&*()";
    const randomIndex = Math.floor(Math.random() * keyboardChars.length);
    return keyboardChars[randomIndex];
  }


function updateSymbols() {
  startResult.length = 0;
  const symbol = startGame.value;
  startResult.push(...symbol);
  const symbolCounter = startResult.length;

  if (symbolCounter === '') {
    alert("Enter symbols");
    return;
  } else if(symbol.includes(randomNum.textContent)){
    alert('you lost');
    startGame.value = 0;
    randomNum.textContent = getRandom();
    updateCounter();
    return
  } else{
    finGame.textContent = symbolCounter;
  }
}
startGame.addEventListener("input", updateSymbols);