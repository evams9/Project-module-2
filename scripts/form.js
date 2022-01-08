const user = document.getElementById("myname");
const contr = document.getElementById("password");
const contr2 = document.getElementById("verifyPassword");
const email = document.getElementById("email");
const form = document.getElementById("form");
const listInputs = document.querySelectorAll(".form-input");



form.addEventListener("submit", (e) => {
  let condition = validationForm();
  if (condition == true) {
    signUpForm();
  }
});

function validationForm() {
  let condition = true;
  listInputs.forEach((element) => {
    element.lastElementChild.innerHTML = "";   /* Click a sign up, hacemos que se borre el mensaje del input */
  });

  if (user.value.length < 1) {
    mesageError("myname", "Ups! Your name please*");
    condition = false;
  }
 
  if (contr.value.length < 1) {
    mesageError("password", "Ups! Your password please*");
    condition = false;
  }
  if (contr2.value != contr.value) {
    mesageError("verifyPassword", "Ups! Wrong password*");
    condition = false;
  }

  if (email.value.length < 1) {
    mesageError("email", "Ups! Your email please*");
    condition = false;
  }

return condition;
}

function mesageError(mesage) {
  let element = document.querySelector(`${mesage}`);  /* No tengo claro que poner, falta algo. */
  element.lastElementChild.innerHTML = mesage;
}

function signUpForm() {
  form.reset();
}