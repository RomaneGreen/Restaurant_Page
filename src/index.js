
import  initals  from './initial'
import  abouts  from './about'
import  menus  from './menu'
import  contacts  from './contact'
import   './style.css'
import   images from'./images/webpack.png';



  abouts();
  menus();
contacts();
  
document.getElementById("pAbout").style.backgroundColor = "white";
document.getElementById("pMenu").style.backgroundColor = "white";
document.getElementById("pContact").style.backgroundColor = "white";

   document.getElementById("pAbout").style.display= 'inline-block'; 
  document.getElementById("pMenu").style.display = 'none';
  document.getElementById("pContact").style.display = 'none';
  
  
  document.getElementById("btna").style.marginTop= '40px';
  document.getElementById("pAbout").style.cssFloat= 'left';
  document.getElementById("btna").style.marginTop= '-20px';
  
  
  document.getElementById("btnm").onclick = function() {
  
    document.getElementById("pAbout").style.display = 'none';
    document.getElementById("pContact").style.display = 'none';
    document.getElementById("pMenu").style.display = 'inline-block';
    document.getElementById("btnm").style.marginTop= '40px';
  document.getElementById("pMenu").style.cssFloat= 'left';
  document.getElementById("btnm").style.marginTop= '-20px';
  }
  
  document.getElementById("btna").onclick = function() {
  
    document.getElementById("pAbout").style.display = 'inline-block';
    document.getElementById("pContact").style.display = 'none';
    document.getElementById("pMenu").style.display = 'none';
   
  
  
  }
  
  document.getElementById("btnc").onclick = function() {
  
    document.getElementById("pAbout").style.display = 'none';
    document.getElementById("pContact").style.display = 'inline-block';
    document.getElementById("pMenu").style.display = 'none';
   document.getElementById("btnc").style.marginTop= '40px';
  document.getElementById("pContact").style.cssFloat= 'left';
  document.getElementById("btnc").style.marginTop= '-20px';
  }
  






 


initals();

