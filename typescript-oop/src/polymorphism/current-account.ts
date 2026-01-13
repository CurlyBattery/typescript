import { BankAccount } from "./bank-account";

export class CurrentAccount extends BankAccount {
    withdraw(amount: number): void {
        if(this.balance >= amount) {
            this.balance -= amount;
        }
    }
}