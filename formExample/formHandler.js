function submitData() {
  alert("Submit data just started!");
  // Constant Variables do not change
  const formOutputDataElement = document.getElementById("formOutputData");
  const formElement = document.getElementById("form");
  formElement.addEventListener("submit", (e) => e.preventDefault()); // prevents page refresh / default behavior
  const firstNameInput = document.getElementById("firstName");
  const middleNameInput = document.getElementById("middleName");
  const lastNameInput = document.getElementById("lastName");
  const preferredNameInput = document.getElementById("preferredName");

  const fullNameInterpolated = `${firstNameInput.value}
                                ${middleNameInput.value}
                                "${preferredNameInput.value}"
                                ${lastNameInput.value}`;
  const fullNameNormal =
    firstNameInput.value +
    middleNameInput.value +
    '"' +
    preferredNameInput.value +
    '"' +
    lastNameInput.value;

  formOutputDataElement.innerHTML =
    fullNameInterpolated + "<br>" + fullNameNormal;
}
