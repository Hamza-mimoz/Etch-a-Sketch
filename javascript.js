
 let Starts= document.getElementById("StartNewOne");
 Starts.addEventListener("click",function(){
  location.reload();
});
let help = document.getElementById("help")
help.addEventListener("click",function(){
  alert(`this will help you
    if you press start new one you have to creat a new grid
    if you want to change your size box you to press start new one and creat a new grid 
    if you want to remove a color do a double click `);
});

 btn=document.getElementById("ChoiceSize");
 btn.addEventListener("click",function(e){
let str= prompt("entre the numbre of boxs: ")

size = Number(str);
size= size*size;

    let num = Math.sqrt(size);
    const container = document.getElementById("container");
    
    for ( let i=0 ; i < size ; i++){ 
        
        let NewDiv = document.createElement("div");
        NewDiv.classList.add("column");
        NewDiv.style.borderColor = " 1px solid black";
        NewDiv.style.width= 600/num + "px";
        NewDiv.style.height=500/num + "px";
        
        container.appendChild(NewDiv);  
    };

    let DivColor = document.getElementById("colors");
 
 DivColor.addEventListener("click",function(e){
  let target=e.target;
  let TypColor= target.id;
   
    
    const myDiv = document.querySelectorAll(".column");
    myDiv.forEach((e) => {
      e.addEventListener("mousedown", function(){
        console.log(TypColor);
        e.style.backgroundColor =TypColor;
        
    });
    });
  
    
    myDiv.forEach((e) => {
      e.addEventListener("dblclick", function(){
        e.style.backgroundColor = "white";
      
      })

    
    });
});

});


