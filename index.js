#! /usr/bin/env node
import inquirer from "inquirer";
const currency_rates = {
    USD: 1,
    PKR: 278.3,
    GBP_Pound: 0.8,
    EURO: 0.94,
    JAP_YEN: 154.53,
    Saudi_Rial: 3.75,
    Turkish_Lira: 32.52,
    Chinese_Yuan: 7.24,
    UAE_Dirham: 3.67,
    Kuwait_Dinar: 0.31,
};
let user_answer = await inquirer.prompt([{
        name: "from",
        type: "list",
        message: "Enter from currency",
        choices: ["USD", "PKR", "GPB_Pound", "EURO", "JAP_YEN", "Saudi_Rial", "Turkish_Lira", "Chinese_Yuan", "UAE_Dirham", "Kuwait_Dinar"],
    },
    {
        name: "to",
        type: "list",
        message: "Enter to currency",
        choices: ["USD", "PKR", "GPB_Pound", "EURO", "JAP_YEN", "Saudi_Rial", "Turkish_Lira", "Chinese_Yuan", "UAE_Dirham", "Kuwait_Dinar"],
    },
    {
        name: "amount",
        type: "number",
        message: "Enter Amount which you want to calculate."
    }]);
let fromAmount = currency_rates[user_answer.from];
let toAmount = currency_rates[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(fromAmount);
console.log(toAmount);
console.log(convertedAmount);
