function validateEmail(email) {
  const regExp =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regExp.test(email);
}

function validate() {
  const email = $("#email").val();
  const $warning = $("#warningtext");
  const $warningicon = $("#warningicon");

  if (validateEmail(email)) {
    $warning.css("visibility", "hidden");
    $warningicon.css("visibility", "hidden");
  } else {
    $warning.css("visibility", "visible");
    $warningicon.css("visibility", "visible");
  }

  if (email === "") {
    $warning.css("visibility", "hidden");
    $warningicon.css("visibility", "hidden");
  }

  return false;
}

$("#email").on("input", validate);
