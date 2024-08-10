
let myImage = document.querySelector("img");
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

myImage.onclick = () => {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "img/ghost.jpg"){
        myImage.setAttribute("src","img/ghost1.jpg");
    } else {
        mySrc = myImage.setAttribute("src","img/ghost.jpg");
    }
};

function setUserName() {
    const myName = prompt("Enter your name: ");
    if (!myName){
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
}

if (!localStorage.getItem("name")){
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
}