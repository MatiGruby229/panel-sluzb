document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    
    const login = form.login.value.toLowerCase();
    const password = form.password.value;

    const allowedUsers = ["lspd", "fbi", "us marshal"];

    if (allowedUsers.includes(login) && password === "tajne123") {
      alert("Zalogowano pomyślnie jako " + login.toUpperCase());
      window.location.href = "officer.html";
    } else {
      alert("Błąd logowania. Spróbuj ponownie.");
    }
  });
});
