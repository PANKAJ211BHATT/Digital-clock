const clockElement = document.getElementById('time');
const clockIndigater = document.getElementById('indigater');
 const clockDay=document.getElementById('day');
function updateTime() {
  const time = new Date();
  let hours = time.getHours();
  let indiacater = " ";

  if(hours===0){
    indiacater="AM";
  }
  else if(hours>0 && hours<12){
    indiacater="AM";
  }
  else if(hours===12){
    indiacater="PM";
    
  }
  else{
    indiacater="PM";
    hours=hours-12;
  }
  const day=time.toDateString();
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');
 

  const timeString = `${hours}:${minutes}:${seconds}`;
  

  clockDay.innerText=day;
  clockElement.innerText = timeString;
  clockIndigater.innerText=indiacater;
}

setInterval(updateTime, 1000);


// function updateTime() {
//     const time = new Date();
//     const hours = time.getHours();
//     // Use let for potential re-assignment
  
//     if (hours === 0) {
//       indiacater = "AM";
//     } else if (hours > 0 && hours < 12) { // Use && for logical AND
//       indiacater = "AM";
//     } else if (hours === 12) {
//       indiacater = "PM";
//     } else {
//       indiacater = "PM";
//       hours -= 12;
//     }
  
//     const minutes = time.getMinutes().toString().padStart(2, '0');
//     const seconds = time.getSeconds().toString().padStart(2, '0');
//     const timeString = `${hours}${indiacater}:${minutes}:${seconds}`;
//     clockElement.innerText = timeString;
//   }
  