// 遍历页面的pre元素，判断第一个子元素是否自有一个
// 如果有一个在判断是否为code标签
// 否则将所有子元素放在code标签中

// pre
function checkPres() {
  const pres = document.querySelectorAll("pre");
  pres.forEach((pre) => {
    const hasChildren = pre.children.length !== 0;

    if (hasChildren && pre.firstElementChild.nodeName !== "CODE") {
      // 有子元素
      pre.innerHTML = `<code style="font-family: inherit;">${pre.innerHTML}</code>`;
    } else if (!hasChildren && pre.innerHTML.trim()) {
      // 只有文本
      pre.innerHTML = `<code>${pre.innerHTML}</code>`;
    }
  });
}

checkPres();

function checkGist() {
  // gist
  const gists = document.querySelectorAll(".gist");
  gists.forEach((gist) => {
    if (gist.parentElement && gist.parentElement.nodeName === "CODE") return;

    // 将整个gist区域塞进code标签里面，避免被翻译
    const codeElement = document.createElement("code");
    codeElement.innerHTML = gist.outerHTML;
    gist.replaceWith(codeElement);
  });
}

checkGist();

setInterval(() => {
  checkPres();
  checkGist();
}, 1200);
