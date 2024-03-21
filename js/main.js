
// active navbar
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
    if(document.documentElement.scrollTop  > 20){
        nav.classList.add("scroll-on");
    }else{
        nav.classList.remove("scroll-on");
    }
}

// nav hide 
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})
 
// counter design
 document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration){
        let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration /  range)),
        timer = setInterval(() => {
            current += increment;
            obj.textContent = current;
            if(current == end){
                clearInterval(timer);
            }
        }, step);
    }
    counter("count1", 0, 1287, 3000);
    counter("count2", 100, 5786, 2500);
    counter("count3", 0, 1440, 3000);
    counter("count4", 0, 7110, 3000);
   // counter("", 1700776123, 238777110, 3000);
 });
   
 function generateRandomNumber() {
    // Generate a random 10-digit number with spaces after every 4 digits
    var randomNumber = '';
    for (var i = 0; i < 3; i++) {
        randomNumber += Math.floor(1000 + Math.random() * 9000) + " ";
    }

    // Trim any extra space at the end
    randomNumber = randomNumber.trim();
    
    // Get the element by ID and set its text content to the generated number
    document.getElementById("random").textContent = randomNumber;
}

// Call the function repeatedly every 5 seconds
setInterval(generateRandomNumber, 1000);

// Call the function when the page loads
window.onload = generateRandomNumber;

