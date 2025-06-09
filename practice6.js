//Q1 - Use prompt function to take input from user to tell them whether they can drive or not
//Q2 - Use confirm to ask the user if they want to see the prompt again
//Q3 - Use console.error to log the error if the age entered is negative
let runAgain = true
let age
while (runAgain) {
    age = Number.parseInt(prompt("Enter your age: "))
    if (age < 0) {
        console.error("Enter a valid age")
        break;
    } 
    alert(
        (age >= 18) ? `You can drive` : `You cannot drive`
    )
    runAgain = confirm("Do you want to check again?")
}

//Q4 - Change the URL to google.com (redirection) if user enters a number greater than 4
//Q5 - Change the background of the page to any colour based on user input through prompt
if (age > 4) {
    location.href = "https://google.com"
}
let colour = prompt("Enter a colour: ")
document.body.style.color = colour