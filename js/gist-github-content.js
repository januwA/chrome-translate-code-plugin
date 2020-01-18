setInterval(() => {
  const codeBox = document.querySelector(".js-gist-file-update-container");
  if(codeBox && codeBox.parentElement.nodeName !== "CODE"){
    const code = document.createElement("code");
    codeBox.before(code);
    code.append(codeBox);
  }
}, 2000);