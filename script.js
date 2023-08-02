
  // Get the cursor element
  const cursor = document.getElementById('curs');

  // Add an event listener to track mouse movement
  document.addEventListener('mousemove', (e) => {
    // Update the cursor element's position
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
  });




function mousein() {
    const arw = document.querySelector('#mf');
    arw.classList.remove("ri-arrow-right-line");
    arw.classList.add("ri-arrow-down-fill");
}
function mouseout() {
    const arw = document.querySelector('#mf');
    arw.classList.remove("ri-arrow-down-fill");
    arw.classList.add("ri-arrow-right-line");

}


function showImage(imgClass) {
    const img = document.querySelector(`.${imgClass}`);
    img.style.display = "inline";
  }
  
  function hideImage(imgClass) {
    const img = document.querySelector(`.${imgClass}`);
    img.style.display = "none";
  }
  


// Get the element with ID "tim"
const timeElement = document.querySelector("#tim");

// Function to get the current local time in HH:mm AM/PM format
function getCurrentTime() {
  const currentTime = new Date();
  let hours = currentTime.getHours();
  const minutes = currentTime.getMinutes().toString().padStart(2, '0');
  const amOrPm = hours >= 12 ? 'PM' : 'AM';
  hours = (hours % 12) || 12; // Convert to 12-hour format
  const formattedTime = hours.toString().padStart(2, '0') + ':' + minutes + ' ' + amOrPm;
  return formattedTime;
}

// Function to update the content of the element with the current time
function updateTime() {
  const currentTime = getCurrentTime();
  timeElement.innerText = currentTime;
  console.log(currentTime)
}

// Call updateTime initially to set the current time
updateTime();

// Call updateTime every minute to keep the displayed time updated
setInterval(updateTime, 60000); // 60000 milliseconds = 1 minute

function showmnu() {
    const mnu = document.querySelector(".mnu");
    const tohid = document.querySelector(".nam");

    if (mnu.style.display = "none") {
        mnu.style.display = "flex";
        tohid.style.display = "none";
    } else {
        mnu.style.display = "none";
        tohid.style.display = "flex";
    }
}

