
function renderJson(json){
const h1 = document.querySelector("h1");
const div = document.createElement("div");
h1.appendChild(div).innerText = json;
}

async function getJson() {
  let json = await fetch("http://localhost:8080/api");
  json = await json.json();
  renderJson(json.test)  
}
getJson();

