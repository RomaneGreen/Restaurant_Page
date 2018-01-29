



export default function  () {

    const btn = document.createElement("Button");
  const t = document.createTextNode("Menu");
  btn.id = 'btnm';
  btn.appendChild(t);
  document.body.appendChild(btn);

  let pEl = document.createElement("p");
  let pText = document.createTextNode("This is our Menu");
  pEl.id = 'pMenu';
  pEl.appendChild(pText);
  document.body.appendChild(pEl);
   

    console.log("menu")
}
