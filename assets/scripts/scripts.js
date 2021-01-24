// get user input 
// check current time to slot time
// if the time is up within the hour backgroung caution bg color
// if its an more that 4hrs away green
// if hour has passed orange color

// if the time is up comming or close store input
// if the day is new delete local storage
var btn = document.getElementsByClassName("saveBtn");

var setSchedule = function () {
   for (var i = 0; i < btn.length; i++) {
       var save_btn = btn[i];
       save_btn.addEventListener("click", (event)=>{
          console.log(event.bubbles);
       })
        console.log(btn[i].id);
   }

}

setSchedule();
