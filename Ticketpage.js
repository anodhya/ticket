


function updateDate() {
  const dateElement = document.getElementById('date');
  const currentDate = new Date();

  const formattedDate = currentDate.toISOString().split('T')[0];

  dateElement.textContent = formattedDate;
}
updateDate()
const daysTag = document.querySelector(".days"),
currentDate = document.querySelector(".current-date"),
prevNextIcon = document.querySelectorAll(".icons span");
// getting new date, current year and month
let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();
// storing full name of all months in array
const months = ["January", "February", "March", "April", "May", "June", "July",
              "August", "September", "October", "November", "December"];
const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
    let liTag = "";
    for (let i = firstDayofMonth; i > 0; i--) { // creating li of previous month last days
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }
    for (let i = 1; i <= lastDateofMonth; i++) { // creating li of all days of current month
        // adding active class to li if the current day, month, and year matched
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() 
                     && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;
    }
    for (let i = lastDayofMonth; i < 6; i++) { // creating li of next month first days
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
    }
    currentDate.innerText = `${months[currMonth]} ${currYear}`; // passing current mon and yr as currentDate text
    daysTag.innerHTML = liTag;
}
renderCalendar();
prevNextIcon.forEach(icon => { // getting prev and next icons
    icon.addEventListener("click", () => { // adding click event on both icons
        // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
        if(currMonth < 0 || currMonth > 11) { // if current month is less than 0 or greater than 11
            // creating a new date of current year & month and pass it as date value
            date = new Date(currYear, currMonth, new Date().getDate());
            currYear = date.getFullYear(); // updating current year with new date year
            currMonth = date.getMonth(); // updating current month with new date month
        } else {
            date = new Date(); // pass the current date as date value
        }
        renderCalendar(); // calling renderCalendar function
    });
});

function updateSummaryTable(selectedDate) {
  const dateElement = document.getElementById('date');
  dateElement.textContent = selectedDate;
}

// Function to add event listeners to the calendar days
function addDayClickListeners() {
  const days = document.querySelectorAll(".days li");
  days.forEach(day => {
    day.addEventListener("click", () => {
      const selectedDate = `${months[currMonth]} ${day.textContent}, ${currYear}`;
      updateSummaryTable(selectedDate);
    });
  });
}

// Update date on page load
updateDate();

// Render calendar and add event listeners
renderCalendar();
addDayClickListeners();















let count1=0;
let count2=0;
let count3=0;
let count4=0;
let count5=0;


/*Srilankan adult*/
document.getElementById("decrease1").onclick=function(){
  if(count1>0) {
    count1-=1
  }
    document.getElementById("Countlbl1").innerHTML=count1;
    document.getElementById("SLA").innerHTML= count1+ "";
        document.getElementById("charges1").innerHTML=count1*4+"USD";
    return count1;
}
document.getElementById("increase1").onclick=function(){
   
    count1+=1;
    document.getElementById("Countlbl1").innerHTML=count1;
    document.getElementById("SLA").innerHTML=count1+ "";
        document.getElementById("charges1").innerHTML=count1*4+"USD";

    return count1
}


/*Srilankan child*/
document.getElementById("decrease2").onclick=function(){
  if(count2>0){
    count2-=1}
    document.getElementById("Countlbl2").innerHTML=count2;
    document.getElementById("SLC").innerHTML=count2+ "";
    document.getElementById("charges2").innerHTML=count2*2+"USD";
}
document.getElementById("increase2").onclick=function(){
  count2+=1;
  document.getElementById("Countlbl2").innerHTML=count2;
  document.getElementById("SLC").innerHTML=count2+ "";
  document.getElementById("charges2").innerHTML=count2*2+"USD";
}

/*Forigen Adults*/
document.getElementById("decrease3").onclick=function(){
  if(count3>0){
    count3-=1}
    document.getElementById("Countlbl3").innerHTML=count3;
    document.getElementById("FA").innerHTML=count3+ "";
    document.getElementById("charges3").innerHTML=count3*10+"USD";
}
document.getElementById("increase3").onclick=function(){
  count3+=1;
  document.getElementById("Countlbl3").innerHTML=count3;
  document.getElementById("FA").innerHTML=count3+ "";
    document.getElementById("charges3").innerHTML=count3*10+"USD";
}

/*Forigen Child*/
document.getElementById("decrease4").onclick=function(){
  if(count4>0){
    count4-=1}
    document.getElementById("Countlbl4").innerHTML=count4;
    document.getElementById("FC").innerHTML=count4+ "";
    document.getElementById("charges4").innerHTML=count4*5+"USD";
    
}
document.getElementById("increase4").onclick=function(){
  count4+=1;
  document.getElementById("Countlbl4").innerHTML=count4;
  document.getElementById("FC").innerHTML=count4+ "";
    document.getElementById("charges4").innerHTML=count4*5+"USD";
}

/*Infaunt*/
document.getElementById("decrease5").onclick=function(){
  if(count5>0){
    count5-=1}
    document.getElementById("Countlbl5").innerHTML=count5;
    document.getElementById("I").innerHTML=count5+ "";
    document.getElementById("charges5").innerHTML="0USD";
}
document.getElementById("increase5").onclick=function(){
  count5+=1;
  document.getElementById("Countlbl5").innerHTML=count5;
  document.getElementById("I").innerHTML=count5+ "";
    document.getElementById("charges5").innerHTML="0USD";
}





document.getElementById("duration1").onclick=function(){
  let selectedValue = document.getElementById("duration1").textContent;
  document.getElementById("duration").textContent = selectedValue+" (Normal)";
  document.getElementById("time").textContent=selectedValue;
  document.getElementById("period").innerHTML="1 hr(1 :Normal 0:Peak)";
  document.getElementById("charges1").innerHTML=count1*4+"USD";
  document.getElementById("charges2").innerHTML=count2*2+"USD";
  document.getElementById("charges3").innerHTML=count3*10+"USD";
  document.getElementById("charges4").innerHTML=count4*5+"USD";
  
    let tot = 0;
    let d1 = document.getElementById("charges1").textContent.replace("USD", "");
    let d2 = document.getElementById("charges2").textContent.replace("USD", "");
    let d3 = document.getElementById("charges3").textContent.replace("USD", "");
    let d4 = document.getElementById("charges4").textContent.replace("USD", "");
  
    tot = Number(d1) + Number(d2) + Number(d3) + Number(d4);
    document.getElementById("tot").innerHTML = tot;
  

}

document.getElementById("duration2").onclick=function(){
  let selectedValue = document.getElementById("duration2").textContent;
  document.getElementById("duration").textContent = selectedValue+" (Normal)";
  document.getElementById("time").textContent=selectedValue;
  document.getElementById("period").innerHTML="1 hr(1 :Normal 0:Peak)";
  document.getElementById("charges1").innerHTML=count1*4+"USD";
  document.getElementById("charges2").innerHTML=count2*2+"USD";
  document.getElementById("charges3").innerHTML=count3*10+"USD";
  document.getElementById("charges4").innerHTML=count4*5+"USD";

  let tot = 0;
  let d1 = document.getElementById("charges1").textContent.replace("USD", "");
  let d2 = document.getElementById("charges2").textContent.replace("USD", "");
  let d3 = document.getElementById("charges3").textContent.replace("USD", "");
  let d4 = document.getElementById("charges4").textContent.replace("USD", "");

  tot = Number(d1) + Number(d2) + Number(d3) + Number(d4);
  document.getElementById("tot").innerHTML = tot;


}

document.getElementById("duration3").onclick=function(){
  let selectedValue = document.getElementById("duration3").textContent;
  document.getElementById("duration").textContent = selectedValue+" (Normal)";
  document.getElementById("time").textContent=selectedValue;
  document.getElementById("period").innerHTML="1 hr(1 :Normal 0:Peak)";
  document.getElementById("charges1").innerHTML=count1*4+"USD";
  document.getElementById("charges2").innerHTML=count2*2+"USD";
  document.getElementById("charges3").innerHTML=count3*10+"USD";
  document.getElementById("charges4").innerHTML=count4*5+"USD";

  let tot = 0;
  let d1 = document.getElementById("charges1").textContent.replace("USD", "");
  let d2 = document.getElementById("charges2").textContent.replace("USD", "");
  let d3 = document.getElementById("charges3").textContent.replace("USD", "");
  let d4 = document.getElementById("charges4").textContent.replace("USD", "");

  tot = Number(d1) + Number(d2) + Number(d3) + Number(d4);
  document.getElementById("tot").innerHTML = tot;

}

document.getElementById("duration4").onclick=function(){
  let selectedValue = document.getElementById("duration4").textContent;
  document.getElementById("duration").textContent = selectedValue+" (Peak)";
  document.getElementById("time").textContent=selectedValue;
  document.getElementById("period").innerHTML="1 hr(1 :Peak 0:Normal)";
  document.getElementById("charges1").innerHTML=count1*6+"USD";
  document.getElementById("charges2").innerHTML=count2*3+"USD";
  document.getElementById("charges3").innerHTML=count3*13+"USD";
  document.getElementById("charges4").innerHTML=count4*8+"USD";

  let tot = 0;
  let d1 = document.getElementById("charges1").textContent.replace("USD", "");
  let d2 = document.getElementById("charges2").textContent.replace("USD", "");
  let d3 = document.getElementById("charges3").textContent.replace("USD", "");
  let d4 = document.getElementById("charges4").textContent.replace("USD", "");

  tot = Number(d1) + Number(d2) + Number(d3) + Number(d4);
  document.getElementById("tot").innerHTML = tot;

}

document.getElementById("duration5").onclick=function(){
  let selectedValue = document.getElementById("duration5").textContent;
  document.getElementById("duration").textContent = selectedValue+" (Peak)";
  document.getElementById("time").textContent=selectedValue;
  document.getElementById("period").innerHTML="1 hr(1 :Peak 0:Normal)";
  document.getElementById("charges1").innerHTML=count1*6+"USD";
  document.getElementById("charges2").innerHTML=count2*3+"USD";
  document.getElementById("charges3").innerHTML=count3*13+"USD";
  document.getElementById("charges4").innerHTML=count4*8+"USD";

  let tot = 0;
  let d1 = document.getElementById("charges1").textContent.replace("USD", "");
  let d2 = document.getElementById("charges2").textContent.replace("USD", "");
  let d3 = document.getElementById("charges3").textContent.replace("USD", "");
  let d4 = document.getElementById("charges4").textContent.replace("USD", "");

  tot = Number(d1) + Number(d2) + Number(d3) + Number(d4);
  document.getElementById("tot").innerHTML = tot;

}
document.getElementById("duration6").onclick=function(){
  let selectedValue = document.getElementById("duration6").textContent;
  document.getElementById("duration").textContent = selectedValue+" (Peak)";
  document.getElementById("time").textContent=selectedValue;
  document.getElementById("period").innerHTML="1 hr(1 :Peak 0:Normal)";
  document.getElementById("charges1").innerHTML=count1*6+"USD";
  document.getElementById("charges2").innerHTML=count2*3+"USD";
  document.getElementById("charges3").innerHTML=count3*13+"USD";
  document.getElementById("charges4").innerHTML=count4*8+"USD";

  let tot = 0;
  let d1 = document.getElementById("charges1").textContent.replace("USD", "");
  let d2 = document.getElementById("charges2").textContent.replace("USD", "");
  let d3 = document.getElementById("charges3").textContent.replace("USD", "");
  let d4 = document.getElementById("charges4").textContent.replace("USD", "");

  tot = Number(d1) + Number(d2) + Number(d3) + Number(d4);
  document.getElementById("tot").innerHTML = tot;

}
document.getElementById("duration7").onclick=function(){
  let selectedValue = document.getElementById("duration7").textContent;
  document.getElementById("duration").textContent = selectedValue+" (Normal)";
  document.getElementById("time").textContent=selectedValue;
  document.getElementById("period").innerHTML="1 hr(1 :Normal 0:Peak)";
  document.getElementById("charges1").innerHTML=count1*4+"USD";
  document.getElementById("charges2").innerHTML=count2*2+"USD";
  document.getElementById("charges3").innerHTML=count3*10+"USD";
  document.getElementById("charges4").innerHTML=count4*5+"USD";

  let tot = 0;
  let d1 = document.getElementById("charges1").textContent.replace("USD", "");
  let d2 = document.getElementById("charges2").textContent.replace("USD", "");
  let d3 = document.getElementById("charges3").textContent.replace("USD", "");
  let d4 = document.getElementById("charges4").textContent.replace("USD", "");

  tot = Number(d1) + Number(d2) + Number(d3) + Number(d4);
  document.getElementById("tot").innerHTML = tot;


}
document.getElementById("duration8").onclick=function(){
  let selectedValue = document.getElementById("duration8").textContent;
  document.getElementById("duration").textContent = selectedValue+" (Normal)";
  document.getElementById("time").textContent=selectedValue;
  document.getElementById("period").innerHTML="1 hr(1 :Normal 0:Peak)";
  document.getElementById("charges1").innerHTML=count1*4+"USD";
  document.getElementById("charges2").innerHTML=count2*2+"USD";
  document.getElementById("charges3").innerHTML=count3*10+"USD";
  document.getElementById("charges4").innerHTML=count4*5+"USD";

  let tot = 0;
  let d1 = document.getElementById("charges1").textContent.replace("USD", "");
  let d2 = document.getElementById("charges2").textContent.replace("USD", "");
  let d3 = document.getElementById("charges3").textContent.replace("USD", "");
  let d4 = document.getElementById("charges4").textContent.replace("USD", "");

  tot = Number(d1) + Number(d2) + Number(d3) + Number(d4);
  document.getElementById("tot").innerHTML = tot;


}
document.getElementById("duration9").onclick=function(){
  let selectedValue = document.getElementById("duration9").textContent+" (Peak)";
  document.getElementById("duration").textContent = selectedValue;
  document.getElementById("time").textContent=selectedValue;
  document.getElementById("period").innerHTML="1 hr(1 :Peak 0:Normal)";
  document.getElementById("charges1").innerHTML=count1*6+"USD";
  document.getElementById("charges2").innerHTML=count2*3+"USD";
  document.getElementById("charges3").innerHTML=count3*13+"USD";
  document.getElementById("charges4").innerHTML=count4*8+"USD";

  let tot = 0;
  let d1 = document.getElementById("charges1").textContent.replace("USD", "");
  let d2 = document.getElementById("charges2").textContent.replace("USD", "");
  let d3 = document.getElementById("charges3").textContent.replace("USD", "");
  let d4 = document.getElementById("charges4").textContent.replace("USD", "");

  tot = Number(d1) + Number(d2) + Number(d3) + Number(d4);
  document.getElementById("tot").innerHTML = tot;

}
document.getElementById("duration10").onclick=function(){
 let selectedValue = document.getElementById("duration10").textContent;
  document.getElementById("duration").textContent = selectedValue+" (Peak)";
  document.getElementById("time").textContent=selectedValue;
  document.getElementById("period").innerHTML="1 hr(1 :Peak 0:Normal)";
  document.getElementById("charges1").innerHTML=count1*6+"USD";
  document.getElementById("charges2").innerHTML=count2*3+"USD";
  document.getElementById("charges3").innerHTML=count3*13+"USD";
  document.getElementById("charges4").innerHTML=count4*8+"USD";

  let tot = 0;
  let d1 = document.getElementById("charges1").textContent.replace("USD", "");
  let d2 = document.getElementById("charges2").textContent.replace("USD", "");
  let d3 = document.getElementById("charges3").textContent.replace("USD", "");
  let d4 = document.getElementById("charges4").textContent.replace("USD", "");

  tot = Number(d1) + Number(d2) + Number(d3) + Number(d4);
  document.getElementById("tot").innerHTML = tot;

}
document.getElementById("duration11").onclick=function(){
  let selectedValue = document.getElementById("duration11").textContent;
  document.getElementById("duration").textContent = selectedValue+" (Peak)";
  document.getElementById("time").textContent=selectedValue;
  document.getElementById("period").innerHTML="1 hr(1 :Peak 0:Normal)"
  document.getElementById("charges1").innerHTML=count1*6+"USD";
  document.getElementById("charges2").innerHTML=count2*3+"USD";
  document.getElementById("charges3").innerHTML=count3*13+"USD";
  document.getElementById("charges4").innerHTML=count4*8+"USD";

  let tot = 0;
  let d1 = document.getElementById("charges1").textContent.replace("USD", "");
  let d2 = document.getElementById("charges2").textContent.replace("USD", "");
  let d3 = document.getElementById("charges3").textContent.replace("USD", "");
  let d4 = document.getElementById("charges4").textContent.replace("USD", "");

  tot = Number(d1) + Number(d2) + Number(d3) + Number(d4);
  document.getElementById("tot").innerHTML = tot;


}


/*Local storage*/
// Function to save user input to local storage
function saveUserInput() {
  const userInputs = {
    date: document.getElementById("date").textContent,
    time: document.getElementById("time").textContent,
    period: document.getElementById("period").textContent,
    sla: document.getElementById("SLA").textContent,
    slc: document.getElementById("SLC").textContent,
    fa: document.getElementById("FA").textContent,
    fc: document.getElementById("FC").textContent,
    i: document.getElementById("I").textContent,
    total: document.getElementById("tot").textContent,
    charges1:document.getElementById("charges1").textContent,
    charges2:document.getElementById("charges2").textContent,
    charges3:document.getElementById("charges3").textContent,
    charges4:document.getElementById("charges4").textContent,
    charges5:document.getElementById("charges5").textContent,
  };

  localStorage.setItem("userInputs", JSON.stringify(userInputs));
}

// Event listener for "Continue with purchase" button
const continueButton = document.querySelector("#Buyticketbtn button");
continueButton.addEventListener("click", saveUserInput);




