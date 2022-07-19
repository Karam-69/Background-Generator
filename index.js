let body = document.body;
let pickerOne = document.querySelector(".picker-right");
let pickerTwo = document.querySelector(".picker-left");
let cssCode = document.querySelector(".code")

function setGradient() {
    body.style.background = `linear-gradient(to right, ${pickerOne.value} , ${pickerTwo.value}  )`;
    cssCode.textContent = `linear-gradient(to right, ${pickerOne.value} , ${pickerTwo.value}  )`;
}

pickerOne.addEventListener("input", setGradient);
pickerTwo.addEventListener("input", setGradient);