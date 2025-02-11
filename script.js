const text = "Thank you for agreeing to be my Valentines, my love. I promise to spoil you with love and affection <3. \
I'm sorry making this proposal so nerdy, and for it to take so long (i really didn't expect it to take this long). \
I wanted to make it more of a proper proposal but since you were overseas at the time, I settled with this idea. \
But you know, you are back already so..... Also if you are reading this, close your eyes for 10 seconds, don't worry this text \
will pause too. I love you, my dear, also the songs on the jukebox are a handful of songs that remind me of us. The jukebox really works. \
You really make my days and nights special so im hoping that i can give you the same treatment. Anyways, here's a funny button i think you should click c:";
let index = 0;
let paperclip = 0
const notValelements = document.querySelectorAll('.notValentines');
const Valelements = document.querySelectorAll('.Valentines');
const upgradeelements = document.querySelectorAll('.upgrades');

function typeText() {
    if (index < text.length) {
        if (index == text.indexOf(" I love you, my dear")) {
            document.getElementById("LoveLetter").textContent += text.charAt(index);
            index++;
            setTimeout(typeText, 15000)
        }
        else {
            document.getElementById("LoveLetter").textContent += text.charAt(index);
            index++;
            setTimeout(typeText, 20); // Adjust speed
        }
    }
    else {
        //add funny button here
    }
}



function clickButton() {
    paperclip++; // Increment the count by 1
    if (paperclip == 1) {
        document.getElementById('countPaperclips').style.display = "flex";
    }
    document.getElementById('countPaperclips').innerText = `You have ${paperclip} clicks`;
    if (paperclip == 3) {
        upgradeelements.forEach(element => {element.style.display = "flex";});
    }
    if (paperclip == 29) {
        document.getElementById("popup").style.display = "flex";
    }
}

function declinePopup() {
    // defines function with name "closeModal"
    document.getElementById("popup").style.display = "none";
    // sets the inline style display as "none", which will hide the element
}

function acceptPopup() {
    notValelements.forEach(element => {element.style.display = "none";});
    document.getElementById("popup").style.display = "none";
    document.body.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
    Valelements.forEach(element => {element.style.display = "flex";});
    typeText();
}

// Add event listeners for both click and touch events to support pc and mobile use

if ("ontouchstart" in window) {
    document.getElementById("showPopup").addEventListener("touchstart", clickButton);
    document.getElementById("acceptButton").addEventListener("touchstart", acceptPopup);
} else {
    document.getElementById("showPopup").addEventListener("click", clickButton);
    document.getElementById("acceptButton").addEventListener("click", acceptPopup);
}
