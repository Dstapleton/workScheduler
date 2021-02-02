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
  var is_current;
  if (localStorage.Date) {
     var stored_date = localStorage.getItem("Date");
   }
   else {
      setDate();
   }
   if (stored_date === current_date){
        is_current = true;
   }
   else{
      is_current = false;
   }
   return is_current;
}

function setDate() {
   // first check
   if (!localStorage.Date){
      localStorage.setItem("Date",current_date);
   } // clear local storage and set current date
   else if (!currentDay()) {
      localStorage.Date = current_date;
   }
}
function loadSchedule () {
   var time_slots = document.querySelectorAll("label");
   if (currentDay()){
    for (var i = 0; i <= time_slots.length - 1; i++) {
       var index = time_slots[i].nextElementSibling.nextElementSibling.nextElementSibling.id;
       var load_select = time_slots[i].nextElementSibling;
       var load_input = time_slots[i].nextElementSibling.nextElementSibling;
       var avalible = localStorage.getItem("time_slot"+index);
       //console.log(avalible);
       if (avalible) {
         load_input.value = localStorage.getItem("time_input"+index);
         load_select.value = localStorage.getItem("time_selection"+index);
         //console.log(index);
       }
       else {
          continue;
       }
    }
   }
   else {
      // do noting
   }
}

var checkSchedule = function (hour) {
  var current_hr = parseInt(hour);
   //set background base on upconning time
   var slot = document.querySelectorAll("label");
   slot.forEach(element => {

      var title_Ele = parseInt(element.title);
      
      if (current_hr >= title_Ele && current_hour < 17) {
         element.parentElement.style.backgroundColor = "red";
      }
      else if (current_hr +3 >= title_Ele && current_hour < 17){
         element.parentElement.style.backgroundColor = "yellow";
      }
      else {
         element.parentElement.style.backgroundColor = "green";
      }
      
   });
}

var saveInput = function (event) {
   var time_slot = event.currentTarget.id;
   var time_selection = event.currentTarget.previousElementSibling.previousElementSibling.value;
   var time_input = event.currentTarget.previousElementSibling.value
   
   // individualize user input
   var _id = time_slot.toString();
   
   localStorage.setItem("time_slot"+ _id , time_slot);
   localStorage.setItem("time_selection" + _id, time_selection);
   localStorage.setItem("time_input" + _id, time_input );
   console.log(_id);

}

var setSchedule = function () {
   for (var i = 0; i < btn.length; i++) {
       var save_btn = btn[i];
       save_btn.addEventListener("click", (event)=>{
          saveInput(event);
       })
   }
}
console.log(document.styleSheets);
console.dir(document.styleSheets[0].cssRules[1].cssText);

// saves the current day 
setDate()

// check for schedule
loadSchedule()

// saves input data
setSchedule();

//set the ergency of schedule
checkSchedule(current_hour);
