let div = document.querySelector("div");
console.log(div);
let button = document.querySelector("button");
let input = document.getElementById("inmail");
button.addEventListener("click", () => {
  console.log(input.value);
  if (input.value.length < 2) {
    alert("min6");
  }
  if (inname.value.length < 2) {
    alert("MinamFname5");
  }
  if (inuser.value.length < 2) {
    alert("Nr3");
  }
  if (inpassword.value.length < 2) {
    alert("password");
  }
  if (username.value.length < 3) {
    alert("username");
  }
});
let inname = document.getElementById("inname");
let inuser = document.getElementById("inuser");
let inpassword = document.getElementById("inpassword");
let username = document.getElementById("username");
