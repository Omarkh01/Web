const methods = ['new', 'list', 'delete', 'quit', 'q'];
let todoList = ["Take out the trash", "Collect Chicken Eggs"];

while (true){
    let userInput = prompt("What would you like to do?");
    
    while (!methods.includes(userInput)){
        userInput = prompt("METHOD NOT FOUND! ENTER VALID METHOD");
    }

    if (userInput === 'new'){
        let newEle = prompt("Enter a new todo");
        todoList.push(newEle);
        console.log(newEle + " added to list");
    }

    else if (userInput === 'list'){
        console.log("**********");       
        for (let i=0; i < todoList.length; i++){
            console.log(`${i}: ${todoList[i]}`)
        }
        console.log("**********");
    }

    else if (userInput === 'delete'){
        let delEle = parseInt(prompt('Enter index of todo to delete'));
        while (todoList[delEle] === undefined || delEle >= todoList.length || delEle < 0){
            delEle = parseInt(prompt('Enter valid index'));
        }
        console.log(`You deleted ${todoList[delEle]} from the list`);
        todoList.splice(delEle, 1);
    }

    else{
        console.log('YOU QUIT!');
        break;
    }
}