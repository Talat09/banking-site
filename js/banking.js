//   .......................................Deposit part.........................................................

document.getElementById("deposit-btn").addEventListener("click", function () {
  // ...................get deposit input text .................
  const getDepositInputText = document.getElementById("deposit-input");
  const newDeposit = parseFloat(getDepositInputText.value);
  //.................. get upper deposit inner text.............
  const getDepositInerText = document.getElementById("deposit-text");
  const newDepositInnerText = parseFloat(getDepositInerText.innerText);
  const totalDeposit = newDeposit + newDepositInnerText;
  getDepositInerText.innerText = totalDeposit;

  // --------------------updated balance----------------
  const getBalanceText = document.getElementById("balance-text");
  const newBalance = parseFloat(getBalanceText.innerText);
  const totalBlance = newDeposit + newBalance;
  getBalanceText.innerText = totalBlance;

  // ....................clear input Field.......................
  getDepositInputText.value = "";
});

//   .......................................withdraw part.........................................................
document.getElementById("withdraw-btn").addEventListener("click", function () {
  console.log("yeh find withdraw btn");
  const getWithdrawInputText = document.getElementById("withdraw-input");
  console.log(getWithdrawInputText.value);
  const newWithdraw = parseFloat(getWithdrawInputText.value);

  const getWithdrawInerText = document.getElementById("withdraw-text");
  const newWithdrawInnerText = parseFloat(getWithdrawInerText.innerText);
  const totalWithdraw = newWithdraw + newWithdrawInnerText;
  getWithdrawInerText.innerText = totalWithdraw;

  //updated balance
  const getBalanceText = document.getElementById("balance-text");
  const newBalance = parseFloat(getBalanceText.innerText);
  const updatedBalanceWithdraw = newBalance - newWithdraw;
  getBalanceText.innerText = updatedBalanceWithdraw;

  //   ..............................clear with input field .................................
  getWithdrawInputText.value = "";
});
