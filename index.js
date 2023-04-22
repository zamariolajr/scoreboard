let homeScore = document.getElementById('home')
let guestScore = document.getElementById('guest')
let home_score = 0
let guest_score = 0

homeScore.textContent = home_score
guestScore.textContent = guest_score

function addOne() {
  home_score += 1
  homeScore.textContent = home_score
}

function addTwo() {
  home_score += 2
  homeScore.textContent = home_score
}

function addThree() {
  home_score += 3
  homeScore.textContent = home_score
}

function addOneGuest() {
  guest_score += 1
  guestScore.textContent = guest_score
}

function addTwoGuest() {
  guest_score += 2
  guestScore.textContent = guest_score
}

function addThreeGuest() {
  guest_score += 3
  guestScore.textContent = guest_score
}
