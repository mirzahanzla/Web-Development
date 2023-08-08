class password {
  constructor() {
    this.passw = document.getElementById("password");
  }

  genPassword(len) {
    let chars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*";
    let password = "";
    for (let i = 0; i <= len; i++) {
      let random = Math.floor(Math.random() * chars.length);
      password += chars.substring(random, random + 1);

      this.passw.value = password;
    }
  }

  copyPassword() {
    let copyText = this.passw;
    copyText.select();
    copyText.setSelectionRange(0, 999);
    document.execCommand("copy");
    alert("Successfully! Your Password is Copied!");
  }
}

let a = new password();
