


export default function () {


    const btna = document.createElement("Button");
    btna.id = 'btna'
  
    const ta = document.createTextNode("About");
    btna.appendChild(ta);
    document.body.appendChild(btna);
  
    let pEla = document.createElement("p");
    let pTexta = document.createTextNode("This is the about page");
    pEla.id = 'pAbout';
    pEla.appendChild(pTexta);
    document.body.appendChild(pEla);
   


    console.log("about")

}



   
