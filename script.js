function openModal() {
    // defines function with name "openModal"
    document.getElementById("popup").style.display = "flex";
    // document.getElementById is a method of accessing the html element with id "popup"
    // sets the inline style display as "flex", which will auto centre and display the element
}

function closeModal() {
    // defines function with name "closeModal"
    document.getElementById("popup").style.display = "none";
    // sets the inline style display as "none", which will hide the element
}

// Add event listeners for both click and touch events to support pc and mobile use
document.getElementById("showPopup").addEventListener("click", openModal);
// .addEventListener activates the function "openModal" when the element "showPopup" is clicked
document.getElementById("showPopup").addEventListener("touchstart", openModal);
// touchstart is when the user begins the touch unlike touchend or touchmove.

document.getElementById("closePopup").addEventListener("click", closeModal);
document.getElementById("closePopup").addEventListener("touchstart", closeModal);
