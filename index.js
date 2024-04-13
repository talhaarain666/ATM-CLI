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
        let transacMethod = await inquirer.prompt([
            {
                name: "transMethod",
                type: "list",
                message: "Please select option",
                choices: ["cash withdraw", "fast cash"]
            }
        ]);
        if (transacMethod.transMethod === 'cash withdraw') {
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: "Enter your amount",
                }
            ]);
            if (balance >= amountAns.amount) {
                balance -= amountAns.amount;
                console.log(`Your remaining balance is  ${balance}`);
            }
            else {
                console.log("Insufficient Balance");
                console.log(`Your balance is only ${balance}`);
            }
        }
        else {
            let fastCashAmount = await inquirer.prompt([
                {
                    name: "fastCashAm",
                    type: "list",
                    choices: ['1000', '3000', '5000', '10000', '20000'],
                    message: "Select the amount to withdraw",
                }
            ]);
            if (balance >= fastCashAmount.fastCashAm) {
                balance -= fastCashAmount.fastCashAm;
                console.log(`Your remaining balance is  ${balance}`);
            }
            else {
                console.log("Insufficient Balance");
                console.log(`Your balance is only ${balance}`);
            }
        }
    }
    else if (operations.operation === "check balance") {
        console.log(`Your balance is  ${balance}`);
    }
}
else {
    console.log("Incorrect Pin Code!");
}
