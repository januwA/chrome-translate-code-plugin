// 标签页中的内容脚本

// pre
function checkPres() {
  const pres = document.querySelectorAll("pre");
  for (let i = 0; i < pres.length; i++) {
    const pre = pres[i];
    if (pre.innerHTML.trim()) {
      const cls = pre.children;
      if (cls.length === 0) {
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
}

checkPres();

function checkGist() {
  // gist
  const gists = document.querySelectorAll(".gist");
  for (let i = 0; i < gists.length; i++) {
    const gist = gists[i];
    if (gist.parentElement && gist.parentElement.nodeName === "CODE") continue;
    const codeElement = document.createElement("code");
    codeElement.innerHTML = gist.outerHTML;
    gist.replaceWith(codeElement);
  }
}

checkGist();

setInterval(() => {
  checkPres();
  checkGist();
}, 1200);
