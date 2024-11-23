function encryptMessage() {
  const message = document.getElementById("message").value;
  const shift = parseInt(document.getElementById("shift").value);

  let encryptedMessage = "";
  for (let i = 0; i < message.length; i++) {
    const charCode = message.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) { // Uppercase letters
      encryptedMessage += String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
    } else if (charCode >= 97 && charCode <= 122) { // Lowercase letters
      encryptedMessage += String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
    } else {
      encryptedMessage += message[i];
    }
  }

  document.getElementById("result").textContent = "Encrypted message: " + encryptedMessage;
}
