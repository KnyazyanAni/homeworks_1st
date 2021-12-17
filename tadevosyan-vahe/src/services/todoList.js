export async function getTodoList() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    return res.json()
}