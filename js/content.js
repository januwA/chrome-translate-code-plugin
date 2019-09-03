// 标签页中的内容脚本

const pres = document.querySelectorAll("pre");

for (let i = 0; i < pres.length; i++) {
  const pre = pres[i];
  const cls = pre.childNodes;
  if (!cls || cls.length === 0) continue;

  const firstChild = cls[0];
  if (firstChild.nodeName !== "CODE") {
    pre.innerHTML = `<code>${pre.innerHTML}</code>`;
  }
}
