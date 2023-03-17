export default function decorate(block) {
  /* change to ul, li */
  const ul = document.createElement("ul");
  [...block.children].forEach((row) => {
    const li = document.createElement("li");
    li.innerHTML = row.innerHTML;
    console.log(li);
    [...li.children].forEach((div) => {
      div.className = "references-div";
    });

    ul.append(li);
  });

  block.textContent = "";
  block.append(ul);
}
