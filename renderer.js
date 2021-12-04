function renderJson(json) {
  const h1 = document.querySelector("h1");
  const div = document.createElement("div");
  if (h1) {
    h1.appendChild(div).innerText = json;
  }
}

async function getJson() {
  try {
    let json = await fetch("http://localhost:8080/api");
    json = await json.json();
    renderJson(json.test);
  } catch (e) {
    console.log(e);
  }
}
getJson();
