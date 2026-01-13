"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const current_account_1 = require("./current-account");
const savings_account_1 = require("./savings-account");
function sendMoney(sender, receiver, amount) {
    sender.withdraw(amount);
    receiver.deposit(amount);
}
const lucas = new current_account_1.CurrentAccount(123);
const maria = new savings_account_1.SavingsAccount(200);
sendMoney(lucas, maria, 100);
console.log(maria.balance);
//# sourceMappingURL=index.js.map