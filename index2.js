function DisplayError(error) {
  var errorSpan = document.getElementById("errorspan");
  errorSpan.innerHTML = "Error! " + String(error);
}
function HideError() {
  var errorSpan = document.getElementById("errorspan");
  errorSpan.innerHTML = "";
}

function Login(e) {
  var Emailreg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  e.preventDefault();
  var Email = document.getElementsByName("email")[0].value;
  var Pass = document.getElementsByName("password")[0].value;
  if (Emailreg.test(Email) == false) {
    DisplayError("Invalid Email");
    return;
  } else {
    HideError();
  }
  if (Pass.length < 8) {
    DisplayError("Password should be atleast 8 characters");
    return;
  } else {
    HideError();
  }
  window.location.replace("index.html");
}

function Register(e) {
  var nameReg = /^[a-zA-Z\s]*$/;
  var Emailreg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  e.preventDefault();
  var Name = document.getElementsByName("name")[0].value;
  var Email = document.getElementsByName("email")[0].value;
  var Pass = document.getElementsByName("password")[0].value;
  var CPass = document.getElementsByName("cpassword")[0].value;

  if (nameReg.test(Name) == false) {
    DisplayError("Only Characters allowed");
    return;
  } else {
    HideError();
  }
  if (Emailreg.test(Email) == false) {
    DisplayError("Invalid Email");
    return;
  } else {
    HideError();
  }
  if (Pass.length < 8) {
    DisplayError("Password should be atleast 8 characters");
    return;
  } else {
    HideError();
  }
  if (Pass != CPass) {
    DisplayError("Password's do not match");
    return;
  } else {
    HideError();
  }
  window.location.replace("index.html");
}

try {
  document.getElementById("login").addEventListener("click", function (e) {
    Login(e);
  });
} catch {}

try {
  document.getElementById("reg").addEventListener("click", function (e) {
    Register(e);
  });
} catch {}
