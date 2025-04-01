function checkPassword() {
    const pw1 = document.getElementById("password1").value;
    const pw2 = document.getElementById("password2").value;

    if (pw1 !== pw2) {
        alert("alert");
        return false;
    }
    return true;
}