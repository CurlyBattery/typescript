"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentAccount = void 0;
const bank_account_1 = require("./bank-account");
class CurrentAccount extends bank_account_1.BankAccount {
    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
        }
    }
}
exports.CurrentAccount = CurrentAccount;
//# sourceMappingURL=current-account.js.map