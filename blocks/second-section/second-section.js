export default function decorate(block) {
  const ul = document.createElement("ul");
  console.log(block.children);
  console.log(block.children[0].innerText);
  [...block.children].forEach((column) => {
    /*     const li = document.createElement("li");
    li.innerHTML = row.innerHTML;
    [...li.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector("picture"))
        div.className = "cards-card-image";
      else div.className = "cards-card-body";
    });
    ul.append(li); */
  });

  /*   block.textContent = "";
  block.append(ul); */
}
