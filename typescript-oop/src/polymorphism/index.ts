import { CurrentAccount } from "./current-account";
import { SavingsAccount } from "./savings-account";
import { BankAccount } from "./bank-account";

function sendMoney(
    sender: BankAccount,
    receiver: BankAccount,
    amount: number
) {
    sender.withdraw(amount);
    receiver.deposit(amount);
}

const lucas = new CurrentAccount(123);
const maria = new SavingsAccount(200);

sendMoney(lucas, maria, 100);

console.log(maria.balance)