//form fields//
function clearName() {
    if (document.getElementById("nameField").value == "First and Last Name") {
      document.getElementById("nameField").value = "";
    }
  }
  function clearPhone() {
    if (document.getElementById("phoneField").value == "example: 212-123-1234") {
      document.getElementById("phoneField").value = "";
    }
  }
  function clearEmail() {
    if (
      document.getElementById("emailField").value ==
      "example: blahblahblah@gmail.com"
    ) {
      document.getElementById("emailField").value = "";
    }
  }
  function resetName() {
    if (document.getElementById("nameField").value == "") {
      document.getElementById("nameField").value = "First and Last Name";
    }
  }
  function resetPhone() {
    if (document.getElementById("nameField").value == "") {
      document.getElementById("nameField").value = "example: 212-123-1234";
    }
  }
  function resetEmail() {
    if (document.getElementById("nameField").value == "") {
      document.getElementById("nameField").value =
        "example: blahblahblah@gmail.com";
    }
  }

// gallery from https://alvarotrigo.com/blog/css-animations-scroll/ //
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);