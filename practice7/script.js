//Q1 - Create a navbar and change the colour of its first element to red
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "red"

//Q2 - Create a table without tbody. Use "view page source" button to check whether it has a tbody or not.
//The page source doesn't have a tbody but the browser performs Auto Correction and includes a tbody, visible on inspecting the page.

//Q3 - Create an element with 3 children. Now change the colour of the first and last element to green.
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "green"
document.getElementsByTagName("nav")[0].lastElementChild.style.color = "green"

//Q4 - Change the background colour of all <li> tags to cyan
Array.from(document.getElementsByTagName("li")).forEach(element => {
    element.style.background = "cyan"
})

//Q5 - Which of the following is used to look for the farthest ancestor that matches a given CSS selector - 
// a) matches b) closest c) contains d) none of these
// ans : d)
