// 遍历页面的pre元素，判断第一个子元素是否自有一个
// 如果有一个在判断是否为code标签
// 否则将所有子元素放在code标签中

// 黑纸白字
const codeStyle = `
    font-family: inherit; 
    white-space: pre;
    display: block;
    font-size: 16px;
`;

// pre
function checkPres() {
  const pres = document.querySelectorAll("pre");
  pres.forEach((pre) => {
    const hasChildren = pre.children.length !== 0;

    if (hasChildren && pre.firstElementChild.nodeName !== "CODE") {
      // 有子元素
      pre.innerHTML = `<code style="${codeStyle}">${pre.innerHTML}</code>`;
    } else if (!hasChildren && pre.innerHTML.trim()) {
      // 只有文本
      pre.innerHTML = `<code style="${codeStyle}">${pre.innerHTML}</code>`;
    }
  });
}

checkPres();

setInterval(() => {
  checkPres();
}, 1200);
