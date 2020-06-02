console.log('chrome translate plugin run in cheatengine.org');


function main() {
  const els = document.querySelectorAll("td.code");
  els.forEach((it) => {
    if (it.firstElementChild.nodeName !== "CODE") {
      it.innerHTML = `<code style="
      width: 100%;
      height: 100%;
      font-family: consolase;
      font-size: 1.2em;
      letter-spacing: 0.5px;
      word-spacing: 2px;
  ">${it.innerHTML}</code>`;
    }
  });
}

[".bodyline", ".catHead", "td", ".code"].forEach(($_) => {
  document
    .querySelectorAll($_)
    .forEach(($__) => ($__.style.background = "#fff"));
});

setInterval(main, 1200);
