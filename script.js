const text = "Thank you for agreeing to be my Valentines, my love. I promise to spoil you with love and affection <3. \
I'm sorry making this proposal so nerdy, and for it to take so long (i really didn't expect it to take this long). \
I wanted to make it more of a proper proposal but since you were overseas at the time, I settled with this idea. \
But you know, you are back already so..... Also if you are reading this, close your eyes for 10 seconds, don't worry this text \
will pause too. I love you, my dear, also the songs on the jukebox are a handful of songs that remind me of us. The jukebox really works. \
You really make my days and nights special so im hoping that i can give you the same treatment. Anyways, here's a funny button i think you should click c:";
let index = 0;
let paperclip = 0;
const yippeeSounds = [0, 100, 150];
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
            setTimeout(typeText, 20);
        }
    }
    else {
        document.getElementById("theButton").style.display = "flex";
    }
}

function backgroundChange() {
    document.body.style.backgroundImage = "url('mylove.jpg')";
    document.body.style.backgroundSize = "cover";
    document.getElementById('theButton').style.display = "none";
}


function clickButton() {
    let clicksound = new Audio("click.mp3");
    clicksound.volume = 0.2;
    clicksound.play();
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
    if (paperclip == 30) {
        document.getElementById("proposal").innerText = `Are you sure?`;
        document.getElementById("TOS").innerText = '';
        document.getElementById("acceptButton").innerText = `Okay!`;
        document.getElementById("popup").style.display = "flex";
    }
    if (paperclip == 31) {
        document.getElementById("proposal").innerText = `Pretty Pretty Please?`;
        document.getElementById("popup").style.display = "flex";
    }
    if (paperclip == 32) {
        document.getElementById("proposal").innerText = `🥺🥺🥺`;
        document.getElementById("popup").style.display = "flex";
    }
    if (paperclip == 32) {
        document.getElementById("proposal").innerText = `ren zhen de?`;
        document.getElementById("popup").style.display = "flex";
    }
    if (paperclip == 33) {
        document.getElementById("proposal").innerText = `Will you extra pretty pretty pretty please be my Valentines?`;
        document.getElementById("popup").style.display = "flex";
        document.getElementById("declineButton").style.display = "none";
        let stopsound = new Audio("Stop.mp3");
        stopsound.volume = 1;
        stopsound.play();
    }
}

function declinePopup() {
    let clicksound = new Audio("click.mp3");
    clicksound.volume = 0.2;
    clicksound.play();
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
    yippeeSounds.forEach((delay, i) => {
        setTimeout(() => {
            let sound = new Audio("yippee.mp3");
            sound.volume = 0.5;
            sound.play();
        }, delay);
    });
    audioSource.src = "M2M.mp3";
    audioPlayer.load(); // Reload the audio player with the new source
    audioPlayer.play();
    document.getElementById('songText').innerText = `♫ Now Playing: M2M by Cody Jon ♫`;
}

function clickJukebox() {
    let clicksound = new Audio("click.mp3");
    clicksound.volume = 0.2;
    clicksound.play();
    if (paperclip > 29) {
        document.getElementById("proposal").innerText = `Baby, I didn't actually code a videogame. Now will you be my valentines?`;
        document.getElementById("popup").style.display = "flex";
        upgradeelements.forEach(element => {element.style.display = "none";});
    }
}


function playM2M() {
    audioSource.src = "M2M.mp3";
    audioPlayer.load(); // Reload the audio player with the new source
    audioPlayer.play();
    document.getElementById('songText').innerText = `♫ Now Playing: M2M by Cody Jon ♫`;
}

function playRFY() {
    audioSource.src = "RoomForYou.mp3";
    audioPlayer.load(); // Reload the audio player with the new source
    audioPlayer.play();
    document.getElementById('songText').innerText = `♫ Now Playing: Room For You by grentperez and Lyn Lapid ♫`;
}

function playblue() {
    audioSource.src = "blue.mp3";
    audioPlayer.load(); // Reload the audio player with the new source
    audioPlayer.play();
    document.getElementById('songText').innerText = `♫ Now Playing: blue by yung kai ♫`;
}

// Add event listeners for both click and touch events to support pc and mobile use

if ("ontouchstart" in window) {
    document.getElementById("showPopup").addEventListener("touchstart", clickButton);
    document.getElementById("acceptButton").addEventListener("touchstart", acceptPopup);
    document.getElementById("declineButton").addEventListener("touchstart", declinePopup);
    document.getElementById("jukeboxButton").addEventListener("touchstart", clickJukebox);
    document.getElementById("M2M").addEventListener("touchstart", playM2M);
    document.getElementById("Roomforyou").addEventListener("touchstart", playRFY);
    document.getElementById("blue").addEventListener("touchstart", playblue);
    document.getElementById("theButton").addEventListener("touchstart", backgroundChange);
}
 else {
    document.getElementById("showPopup").addEventListener("click", clickButton);
    document.getElementById("acceptButton").addEventListener("click", acceptPopup);
    document.getElementById("declineButton").addEventListener("click", declinePopup);
    document.getElementById("jukeboxButton").addEventListener("click", clickJukebox);
    document.getElementById("M2M").addEventListener("click", playM2M);
    document.getElementById("Roomforyou").addEventListener("click", playRFY);
    document.getElementById("blue").addEventListener("click", playblue);
    document.getElementById("theButton").addEventListener("click", backgroundChange);
}
