// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
let today = dayjs().format('dddd, MMMM D, YYYY, hh:mma');
$('#current-day').text(today);

let saveBtn = $(".saveBtn")
let clearBtn = $(".clear")

$(function () {
  saveBtn.on('click',function () {
    let text = $(this).siblings(".description").val();
    let time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
  })

  $("#07 .description").val(localStorage.getItem("07"));
  $("#08 .description").val(localStorage.getItem("08"));
  $("#09 .description").val(localStorage.getItem("09"));
  $("#10 .description").val(localStorage.getItem("10"));
  $("#11 .description").val(localStorage.getItem("11"));
  $("#12 .description").val(localStorage.getItem("12"));
  $("#13 .description").val(localStorage.getItem("13"));
  $("#14 .description").val(localStorage.getItem("14"));
  $("#15 .description").val(localStorage.getItem("15"));
  $("#16 .description").val(localStorage.getItem("16"));
  $("#17 .description").val(localStorage.getItem("17"));
  $("#18 .description").val(localStorage.getItem("18"));
  
// loop through .time-blocks
function currentHour() {
  let currentTime = dayjs().format('HH');
      
  $(".time-block").each(function(){
    let timeBlock = parseInt($(this).attr("id"));

      console.log(currentTime);
  
// checks currentTime and adds the correct class
    if (timeBlock < currentTime) {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
    }
    else if (timeBlock == currentTime){
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
    }
    else {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
      }
    })
  }
currentHour();

clearBtn.on('click',function () {
  localStorage.clear();
  location.reload();
})
  
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  })
