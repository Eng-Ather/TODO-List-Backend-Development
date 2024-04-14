#! /usr/bin/env node
import inquirer from "inquirer";
let todo = []; //declearing an array to save input (asking from user) in todo list
let condition = true; // declearing variable which is going to be used in while loop
while (condition) {
    let todo_question = await inquirer.prompt([
        { message: "\n What would you like to add in todo list", type: "input",
            name: "first_question" },
        { message: "\t\n **** Would you like to add more in todo list **** ", type: "confirm",
            name: "second_answer", default: "true" },
    ]);
    var answer = todo_question.first_question; //using variable to get user input value
    if (answer.length != 0) //using string.length method to check variable is empty or hold value
     {
        todo.push(todo_question.first_question);
    }
    else {
        console.log("\n You din not Enter any value in todo lit");
    }
    condition = todo_question.second_answer;
} // while loop ends here
if (todo.length != 0) //if array is empty so it will not disply on screen
 {
    console.log("\n your list ==> " + todo);
}
else {
    console.log("\n -----  Thank You  ----- ");
}
