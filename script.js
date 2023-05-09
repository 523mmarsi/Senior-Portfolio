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



