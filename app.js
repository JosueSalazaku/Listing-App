document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById('send');
  
    button.addEventListener("click", () => {
      let nameValue = document.getElementById('inputField').value;
      let list = document.getElementById('clientList');
      let newName = document.createElement('li');
      newName.innerText = nameValue;
      list.appendChild(newName);
    });
  });
  