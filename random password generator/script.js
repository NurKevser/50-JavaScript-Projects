const display = document.querySelector(".input");
const button = document.querySelector(".btn");
const copyBtn = document.querySelector(".far");
const copyActive = document.querySelector(".fas");

function generator() {
  let password = "";
  let character =
    "!@$%^&*-_+=:|~?/.;abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  for (var i = 0; i < 8; i++)
    password += character.charAt(Math.floor(Math.random() * character.length));
  return password;
}

button.addEventListener("click", () =>{
    display.value = generator();
});

function copy(){
    
}