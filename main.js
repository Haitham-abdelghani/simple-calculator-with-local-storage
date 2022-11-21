let output=document.querySelector("#my-out");

function display(num){
    output.value= output.value+num
}

function Clear(){
    output.value= "";
}

function Delete(){
    output.value=output.value.slice(0,-1);
}
function calc(){
    try{output.value=eval(output.value)
    }
    catch(err){
        output.value="error"
    }
}

let myC=document.querySelectorAll("ul li");
let myD=document.querySelector(".container");

if(window.localStorage.getItem("color")){
    myD.style.backgroundColor=window.localStorage.getItem("color");
    myC.forEach((li)=>{
        li.classList.remove("active");
    })
    document.querySelector(`[data-color="${window.localStorage.getItem("color")}`).classList.add("active")
};


myC.forEach((li)=>{
    li.addEventListener("click",(e)=>{
        myC.forEach((li)=>{
            li.classList.remove("active");
        })
        e.currentTarget.classList.add("active");
        window.localStorage.setItem("color",e.currentTarget.dataset.color);
        myD.style.backgroundColor=e.currentTarget.dataset.color;
    })
})