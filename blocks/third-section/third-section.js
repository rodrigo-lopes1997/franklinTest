export default function decorate(block) {
  /* console.log(block.children[0].innerText); */
  const row = document.createElement("div");
  row.className = "row";

  const div121 = document.createElement("div");
  const div122 = document.createElement("div");
  const div61 = document.createElement("div");
  const div62 = document.createElement("div");
  const div63 = document.createElement("div");
  const div64 = document.createElement("div");
  div121.className = "col-md-12";
  div122.className = "col-md-12";
  div61.className = "col-md-6";
  div62.className = "col-md-6";
  div63.className = "col-md-6";
  div64.className = "col-md-6";

  [...block.children].forEach((line) => {
    [...line.children].forEach((content) => {
      div121.innerHTML += `<h2>${content.children[0].innerHTML}</h2>`;
      div122.innerHTML += `<h1>${content.children[1].innerHTML}</h1>`;
      div61.innerHTML += `<p>${content.children[2].innerHTML}</p>`;
      div62.innerHTML += `<p>${content.children[3].innerHTML}</p>`;
      div63.innerHTML += `<p>${content.children[4].innerHTML}</p>`;
      div64.innerHTML += `<p>${content.children[5].innerHTML}</p>`;
    });
  });

  row.append(div121, div122, div61, div62, div63, div64);

  block.textContent = "";
  block.append(row);
}
