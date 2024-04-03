#! /usr/bin/env node
import inquirer from "inquirer";
let balance = 50000;
let myPin = 1234;
let answer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your Pin"
    }
]);
if (answer.pin === myPin) {
    console.log("Correct Pin Code!");
    let operations = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Please select option",
            choices: ["cash withdraw", "check balance"]
        }
    ]);
    if (operations.operation === "cash withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter your amount",
            }
        ]);
        balance -= amountAns.amount;
        console.log(`Your remaining balance is  ${balance}`);
    }
    else if (operations.operation === "check balance") {
        console.log(`Your balance is  ${balance}`);
    }
}
else {
    console.log("Incorrect Pin Code!");
}
