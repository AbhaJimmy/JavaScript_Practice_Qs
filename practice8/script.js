// Q1 - Show different alerts when different buttons are clicked
// Q2 - Create a website which is capable of storing bookmarks of your favorite websites
// Q3 - Repeat Q2 using event listeners
document.getElementById('google').addEventListener("click", () => window.open("https://google.com","_blank"))
document.getElementById("roadmaps").addEventListener("click", () => window.open("https://roadmap.sh","_blank"))
document.getElementById("career").addEventListener("click", () => window.open("https://careerride.com","_blank"))

// Q4 - Fetch content of a website every 5 seconds
const fetchContent = async(url) => {
    con = await fetch(url);
    let a = await con.json();
    return a;
}
setInterval(async function() {
    let url = "https://jsonplaceholder.typicode.com/todos/1"
    console.log(await fetchContent(url))
},7000)

// Q5 - Create a glowing bulb effect using toggle method
let bulb = document.getElementsByClassName('bulb')[1]
const func3 = () => {
    let div = document.getElementsByClassName('bulb')[0]
    div.classList.toggle('glow')
}
bulb.addEventListener("click", func3)