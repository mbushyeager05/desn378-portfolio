// ============================================
// IMAGE CHANGER FEATURE
// ============================================


const myImage = document.querySelector("img");


myImage.addEventListener("click", () => {
  
 
  const mySrc = myImage.getAttribute("src");

  if (mySrc === "images/image1.jpg") {
 
    myImage.setAttribute("src", "images/image2.jpg");
  } else {

    myImage.setAttribute("src", "images/image1.jpg");
  }
});


// ============================================
// PERSONALIZED WELCOME MESSAGE FEATURE
// ============================================



const myButton = document.querySelector("button");
const myHeading = document.querySelector("h1");


function setUserName() {

  const myName = prompt(" Welcome! Please enter your name.");
  

  if (!myName) {

    setUserName();
  } else {
 
    localStorage.setItem("name", myName);
    

    myHeading.textContent = `Lets go to the Cit, ${myName}`;
  }
}


if (!localStorage.getItem("name")) {

  setUserName();
} else {

  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Lets go to the Cit, ${storedName}`;
}


myButton.addEventListener("click", () => {
  setUserName();
});


/*
  SUMMARY:
  This file does two things:
  
  1. IMAGE CHANGER: When you click the image, it swaps between two different 
     pictures. It checks which image is currently showing, then switches to 
     the other one. 
  
  2. WELCOME MESSAGE: When you first visit the page, it asks for your name. 
     When you come back later, it welcomes you with your saved name. The "Change user" button 
     lets you update your name anytime.
  
  The key pattern I learned: Find → Listen → Respond
  - Use querySelector() to FIND elements on the page
  - Use addEventListener() to LISTEN for user actions (like clicks)
  - Use functions and localStorage to RESPOND and remember data
  
  This same pattern is used everywhere in web development: theme toggles,
  shopping carts, user preferences - they all follow this structure.
*/