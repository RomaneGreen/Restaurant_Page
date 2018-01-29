
export default function  ()  {

    document.getElementById("content").innerHTML = "Welcome to Charlie's"

document.body.style.backgroundImage = "url('6d437dabe19c616c3811f0c326eb19cf.jpg')";

document.getElementById("content").style.marginLeft = '38%';
document.getElementById("content").style.color = 'red';
document.getElementById("content").style.fontSize = 'xx-large';


let pTag = document.createElement("p")
let pNode = document.createTextNode("Best Since 1942!!!")
pTag.appendChild(pNode)
let content = document.getElementById("content")
content.appendChild(pTag);


}


