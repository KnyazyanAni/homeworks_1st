export default async  function  getTodoList(){

      const data =  await fetch("https://jsonplaceholder.typicode.com/todos")

    return data.json()

}


