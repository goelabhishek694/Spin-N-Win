let input=document.querySelector(".input");
let ul=document.querySelector(".task-list");

input.addEventListener("keydown",function(e){
    if(e.key=="Enter"){ //event object
        let task=input.value;
        let li=document.createElement("li");
        li.innerText=task;
        li.setAttribute("class","task");
        ul.appendChild(li);
        input.value="";
        li.addEventListener("dblclick",function(event){
            li.remove();
        })
    }
});

