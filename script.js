let paperclip = 0
const notValelements = document.querySelectorAll('.notValentines');
const Valelements = document.querySelectorAll('.Valentines');
const upgradeelements = document.querySelectorAll('.upgrades');

function clickButton() {
    paperclip++; // Increment the count by 1
    if (paperclip == 1) {
        document.getElementById('countPaperclips').style.display = "flex";
    }
    document.getElementById('countPaperclips').innerText = `You have ${paperclip} paperclips`;
    if (paperclip == 3) {
        upgradeelements.forEach(element => {element.style.display = "flex";});
    }
}

function openModal() {
    // defines function with name "openModal"
    document.getElementById("popup").style.display = "flex";
    // document.getElementById is a method of accessing the html element with id "popup"
    // sets the inline style display as "flex", which will auto centre and display the element
}

function declinePopup() {
    // defines function with name "closeModal"
    document.getElementById("popup").style.display = "none";
    // sets the inline style display as "none", which will hide the element
}

function acceptPopup() {
    notValelements.forEach(element => {element.style.display = "none";});
    Valelements.forEach(element => {element.style.display = "flex";});
}

// Add event listeners for both click and touch events to support pc and mobile use

if ("ontouchstart" in window) {
    document.getElementById("showPopup").addEventListener("touchstart", clickButton);
    document.getElementById("closePopup").addEventListener("touchstart", declinePopup);
} else {
    document.getElementById("showPopup").addEventListener("click", clickButton);
    document.getElementById("closePopup").addEventListener("click", declinePopup);
}
