// get user input 
// check current time to slot time
// if the time is up within the hour backgroung caution bg color
// if its an more that 4hrs away green
// if hour has passed orange color

// if the time is up comming or close store input
// if the day is new delete local storage

var btn = document.getElementsByClassName("saveBtn");
var _date = new Date();
var current_date = _date.toDateString();
var current_hour = _date.getHours();

//set current date
var display_date = document.getElementById("current_date");
display_date.innerHTML = current_date;

function currentDay() {
  
  if (localStorage.schedule) {
     var stored_date = localStorage.getItem("Schedule");
     var is_current;
     if (stored_date === currentDay){
        is_current = true;
     }
     else{
        is_current = false;
     }
  }
  return is_current;
}

function setDate() {
   //
   if (current_hour < 6){
      localStorage.setItem("Schedule",currentDay);
   }

}
  

var checkSchedule = function (hour) {
  var current_hr = parseInt(hour);
   //set background base on upconning time
   var slot = document.querySelectorAll("label");
   slot.forEach(element => {

      var title_Ele = parseInt(element.title);
      
      if (current_hr >= title_Ele) {
         //console.dir(element.parentElement.id);
         element.parentElement.style.backgroundColor = "red";
         //console.log(element.title);
      }
      else if (current_hr +3 >= title_Ele){
         element.parentElement.style.backgroundColor = "yellow";
         //console.log(element.title);
      }
      else {
         element.parentElement.style.backgroundColor = "green";
         console.log(element.title);
      }
      
   });
}
checkSchedule(current_hour);

var saveInput = function (event) {
   console.dir(event.currentTarget);
   var time_slot = event.currentTarget.id;
   var time_selection = event.currentTarget.previousElementSibling.previousElementSibling.value;
   var time_input = event.currentTarget.previousElementSibling.value
   // set schedule from local storage
   // if no local storage set to local storage
   

   localStorage.setItem(time_slot, time_slot);
   localStorage.setItem("time_selection", time_selection);
   localStorage.setItem("time_input", time_input );

   console.dir(time_slot +" "+ time_selection + " " + time_input);
}

var setSchedule = function () {
   for (var i = 0; i < btn.length; i++) {
       var save_btn = btn[i];
       save_btn.addEventListener("click", (event)=>{
          saveInput(event);
       })
   }
}

setSchedule();
