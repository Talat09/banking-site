const submitBtn = document
  .getElementById("submit-btn")
  .addEventListener("click", function () {
    const inputText = document.getElementById("email");
    const getInput = inputText.value;
    const passText = document.getElementById("password");
    const getPass = passText.value;
    if (getInput == "dihan123@gmail.com" && getPass == "dihan123") {
      window.location.href = "/Banking.html";
    }
  });
