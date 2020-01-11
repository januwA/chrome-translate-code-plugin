// 对https://medium.com/进行处理

setInterval(() => {
  const figures = document.querySelectorAll("figure");
  for (const figure in Array.from(figures)) {
    if (figure && figure.parentElement.nodeName !== "CODE") {
      const code = document.createElement("code");
      figure.before(code);
      code.appendChild(figure);
    }
  }
}, 2000);
