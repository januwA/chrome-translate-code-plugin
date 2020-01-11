// 对https://medium.com/进行处理

setInterval(() => {
  const figures = document.querySelectorAll("figure");
  for (const figure of Array.from(figures)) {
    if (figure && figure.parentElement.nodeName !== "CODE") {
      const code = document.createElement("code");
      figure.before(code);
      code.appendChild(figure);
    }
  }
}, 2000);

setInterval(() => {
  const pres = document.querySelectorAll("pre");
  for (const pre of Array.from(pres)) {
    if (pre && pre.innerHTML && pre.innerHTML.trim()) {
      if (pre.children.length === 0) {
        pre.innerHTML = `<code>${pre.innerHTML}</code>`;
      } else {
        if (
          pre.children.length === 1 &&
          pre.firstElementChild.nodeName == "CODE"
        ) {
          continue;
        }
        const nmodes = Array.from(pre.childNodes);
        const code = document.createElement("code");
        nmodes.forEach(e => code.appendChild(e));
        pre.appendChild(code);
      }
    }
  }
}, 2000);
