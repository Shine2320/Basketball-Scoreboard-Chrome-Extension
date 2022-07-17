let homeEl = document.getElementById("home-el");
let guestEl = document.getElementById("guest-el");
let leadEl= document.getElementById("lead-el");

document.getElementById("home1-btn").addEventListener("click", add1Home);
document.getElementById("home2-btn").addEventListener("click", add2Home);
document.getElementById("home3-btn").addEventListener("click", add3Home);
document.getElementById("guest1-btn").addEventListener("click", add1Guest);
document.getElementById("guest2-btn").addEventListener("click", add2Guest);
document.getElementById("guest3-btn").addEventListener("click", add3Guest);
document.getElementById("newgame-btn").addEventListener("click", newGame);
let countHome = 0
let countGuest =0
let leading= "LEADING : "
function add1Home()
{
      countHome +=1 
      homeEl.innerText=countHome
      if(countGuest <countHome)
{
    leadEl.textContent = leading+ "HOME"
}
else if(countGuest > countHome)
{
    leadEl.textContent = leading+ "GUEST";
}
else{
    leadEl.textContent = leading+ "TIE"
}
      
}
function add2Home()
{
    countHome +=2
    homeEl.innerText=countHome
    if(countGuest <countHome)
{
    leadEl.textContent = leading+ "HOME"
}
else if(countGuest > countHome)
{
    leadEl.textContent = leading+ "GUEST";
}
else{
    leadEl.textContent = leading+ "TIE"
}
}
function add3Home()
{
    countHome +=3
    homeEl.innerText=countHome
    if(countGuest <countHome)
{
    leadEl.textContent = leading+ "HOME"
}
else if(countGuest > countHome)
{
    leadEl.textContent = leading+ "GUEST";
}
else{
    leadEl.textContent = leading+ "TIE"
}
}
function add1Guest()
{
    countGuest +=1
    guestEl.innerText=countGuest
    if(countGuest <countHome)
{
    leadEl.textContent = leading+ "HOME"
}
else if(countGuest > countHome)
{
    leadEl.textContent = leading+ "GUEST";
}
else{
    leadEl.textContent = leading+ "TIE"
}
}
function add2Guest()
{
    countGuest +=2
    guestEl.innerText=countGuest
    if(countGuest <countHome)
{
    leadEl.textContent = leading+ "HOME"
}
else if(countGuest > countHome)
{
    leadEl.textContent = leading+ "GUEST";
}
else{
    leadEl.textContent = leading+ "TIE"
}
}
function add3Guest()
{
    countGuest +=3
    guestEl.innerText=countGuest
    if(countGuest <countHome)
{
    leadEl.textContent = leading+ "HOME"
}
else if(countGuest > countHome)
{
    leadEl.textContent = leading+ "GUEST";
}
else{
    leadEl.textContent = leading+ "TIE"
}
}
function newGame()
{
    countGuest= 0
    countHome = 0
    homeEl.innerText=countHome
    guestEl.innerText=countGuest
}
