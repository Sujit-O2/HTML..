let a= 0;
let b=0;
const choice=document.querySelectorAll(".jj");
    let displaY=document.querySelector("#comm");
    let dis=document.querySelector("#ssd");
    let aa=document.querySelector("#ys");
    let bb=document.querySelector("#cs");




const compcho=()=>{
        const oo=["rock","paper","scissor"];
        const ab=Math.floor(Math.random()*3);
        return oo[ab];
    }



    choice.forEach((chh)=>{
    chh.addEventListener("click",()=>{
       const ussc= chh.getAttribute("id");
       compp(ussc);
 })
 })



 const compp= (ussc)=>{
    if(ussc==compcho()){
        dis.setAttribute("id","draw");
        displaY.innerText="it's a Draw";
    }
   else if(ussc=="rock"&&compcho()=="paper"){
        dis.setAttribute("id","lost");
        displaY.innerText="you have Lost paper bits rock";
        b++;
        bb.innerText=b;
    }
    else if(ussc=="paper"&&compcho()=="rock"){
        dis.setAttribute("id","win");
        displaY.innerText="you have Win paper bits rock";
        a++;
        aa.innerText=a;
    }
    
    else  if(ussc=="rock"&&compcho()=="scissor"){
        dis.setAttribute("id","win");
        displaY.innerText="you have Win rock bits scissor";
        a++;
        aa.innerText=a;
    }
    else if(ussc=="scissor"&&compcho()=="rock"){
        dis.setAttribute("id","lost");
        displaY.innerText="you have Lost rock bits scissor";
        b++;
        bb.innerText=b;
    }
    else if(ussc=="paper"&&compcho()=="scissor"){
        dis.setAttribute("id","lost");
        displaY.innerText="you have lost scissor bits paper"; 
        b++;
        bb.innerText=b;
    }
    else if(ussc=="scissor"&&compcho()=="paper"){
        dis.setAttribute("id","win");
        displaY.innerText="you have Win scissor bits paper"; 
        a++;
        aa.innerText=a;
    }
 }