

export default function  () {

    const btnc = document.createElement("Button");
  btnc.id = 'btnc'
  const tc = document.createTextNode("Contact");
  btnc.appendChild(tc);
  document.body.appendChild(btnc);

  let pElc = document.createElement("p");
  let pTextc = document.createTextNode("This is the Contact page");
  pElc.id = 'pContact'
  pElc.appendChild(pTextc);
  document.body.appendChild(pElc);

   

    console.log("contact")
}


