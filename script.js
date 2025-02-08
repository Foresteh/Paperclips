function openModal() {
    document.getElementById("popup").style.display = "flex";
}

function closeModal() {
    document.getElementById("popup").style.display = "none";
}

// Add event listeners for both click and touch events
document.getElementById("showPopup").addEventListener("click", openModal);
document.getElementById("showPopup").addEventListener("touchstart", openModal);

document.getElementById("closePopup").addEventListener("click", closeModal);
document.getElementById("closePopup").addEventListener("touchstart", closeModal);
