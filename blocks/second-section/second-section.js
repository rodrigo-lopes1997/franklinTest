export default function decorate(block) {
  /* console.log(block.children[0].innerText); */
  const ul = document.createElement("ul");
  [...block.children].forEach((row) => {
    const li = document.createElement("li");
    li.innerHTML = row.innerHTML;
    li.className = "li-second-section";
    [...li.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector("picture"))
        div.className = "second-section-image";
      else div.className = "second-section-body";
    });
    ul.append(li);
  });

  block.textContent = "";
  block.append(ul);
}
