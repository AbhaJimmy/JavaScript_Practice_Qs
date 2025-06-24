// Create a game of snake, water and gun. The game should ask you to enter S, W or G. 
// The computer should be able to randomly generate S, W or G and declare win or loss using alert. 
// Use confirm and prompt whenever required.
let user = prompt("Enter Snake, Water or Gun: ")
let compInput = Math.floor(Math.random() * 3)
let choiceList = ["S", "W", "G"][compInput]
const match = (choiceList, user) => {
    if (user===choiceList) return "Match tied"
    else if (user==="S" && choiceList==="W") return "user"
    else if (user==="S" && choiceList==="G") return "computer"
    else if (user==="W" && choiceList==="G") return "user"
    else if (user==="W" && choiceList==="S") return "computer"
    else if (user==="G" && choiceList==="W") return "computer"
    else if (user==="G" && choiceList==="S") return "user"
}

let result = match(choiceList,user)
console.log(`Computer: ${choiceList} \t User: ${user} \nThe winner is: ${result}`)