// Sending a post request to a fake rest API (JSON placeholder)
const createTodo = async (todo) => {
        let options = {
                method: "POST",
                headers: {
                        "Content-Type": "application/json"
                },
                body: JSON.stringify(todo),
        }
        let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
        let response = await p.json()
        return response
}

const getTodo = async (id) => {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
        let r = await response.json()
        return r
}

const mainFunc = async () => {
        let todo = {
                title: 'Fruit',
                body: 'Apple',
                userId: 1100
        }
        let todoResponse = await createTodo(todo)
        console.log(`Posting/creating a new todo:`)
        console.log(todoResponse)
        let gettingTodo = await getTodo(5)
        console.log(`Getting Todo:`)
        console.log(gettingTodo)
}

mainFunc()