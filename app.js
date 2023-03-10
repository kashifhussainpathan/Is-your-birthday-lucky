const dob = document.querySelector("#dob");
const luckyNumber = document.querySelector("#lucky-number");
const btn = document.querySelector(".btn");
const output = document.querySelector(".output");
const reset = document.querySelector(".reset-btn");
const form = document.querySelector(".form")

btn.addEventListener("click", checkIsBirthdayLucky);

function compareValues(sum, luckyNumber) {
  if (sum % luckyNumber === 0) {
    output.innerText = `Yay, ${luckyNumber} is Lucky Number 🎉`
    output.style.backgroundColor = "green";
  } else {
    output.innerText = `${luckyNumber} is not lucky Number 😕`
    output.style.backgroundColor = "grey";
  }
};

function checkIsBirthdayLucky() {
  datevalue = dob.value;
  const sum = calculateSum(datevalue)
  if (dob.value && luckyNumber.value) {
    compareValues(sum, luckyNumber.value)
  } else {
    output.innerText = "Please enter both the fields.";
    output.style.backgroundColor = "red";
  }
};

function calculateSum(datevalue) {
  let dateStr = datevalue.replaceAll("-", "");
  let sum = 0;
  for (var dateNum of dateStr) {
    sum = sum + Number(dateNum);
  }
  return sum;
};

reset.addEventListener("click", formReset);

function formReset() {
  form.reset();
  output.innerText = "";
}