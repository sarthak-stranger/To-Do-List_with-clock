const inputbox = document.getElementById("input-box");
const tasklist = document.getElementById("task-list");
const button = document.getElementById("button");

// --------------------------------Add Button click function -------------------------------

button.onclick = function(){
    if(inputbox.value === ''){
        alert("Please Write Something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        tasklist.appendChild(li);

        /*-----------------Delete task cross -------------------------------*/

        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputbox.value = '';
    saveData();
} 

    //  ------------------------ Check & delete Functionality ------------------------

tasklist.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);
  
// ------------------------------ Saving the data when browser restart but data saves----------

function saveData(){
    localStorage.setItem("data",tasklist.innerHTML);
}
function showTask(){
    tasklist.innerHTML = localStorage.getItem("data");
}
showTask();

/*---------------------------Clock----------------------------*/

setInterval(() => {
   d = new Date();
   htime = d.getHours();
   mtime = d.getMinutes();
   stime = d.getSeconds();
   hrotation = 30*htime + mtime/2;
   mrotation = 6*mtime;
   srotation = 6*stime;

   hour.style.transform =  `rotate(${hrotation}deg)`;
   minute.style.transform =  `rotate(${mrotation}deg)`;
   second.style.transform =  `rotate(${srotation}deg)`;

}, 1000);

 