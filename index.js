


let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")


let homeScore = 0
let guestScore = 0
function homeScoreOne() {
    homeScore +=1
    homeScoreEl.textContent = homeScore
        
}

function homeScoreTwo() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function homeScoreThree() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}


 function guestScoreOne() {
    
    
    guestScore += 1
    guestScoreEl.textContent =guestScore
    
}


function guestScoreTwo() {
    
    guestScore += 2
    guestScoreEl.textContent =guestScore
    
}

function guestScoreThree() {
    
    guestScore += 3
    guestScoreEl.textContent =guestScore
    
}