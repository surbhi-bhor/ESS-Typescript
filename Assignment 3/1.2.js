var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Account = /** @class */ (function () {
    function Account(id, name, balance) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }
    Account.totalbalance = function () {
        var accounts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            accounts[_i] = arguments[_i];
        }
        var sum = 0;
        for (var _a = 0, accounts_1 = accounts; _a < accounts_1.length; _a++) {
            var i = accounts_1[_a];
            sum += i.balance;
        }
        console.log("Total balance in the bank is: " + sum);
    };
    return Account;
}());
var SavingAccount = /** @class */ (function (_super) {
    __extends(SavingAccount, _super);
    function SavingAccount(id, name, balance, interest) {
        var _this = _super.call(this, id, name, balance) || this;
        _this.interest = interest;
        return _this;
    }
    return SavingAccount;
}(Account));
var CurrentAccount = /** @class */ (function (_super) {
    __extends(CurrentAccount, _super);
    function CurrentAccount(id, name, balance, cash_credit) {
        var _this = _super.call(this, id, name, balance) || this;
        _this.cash_credit = cash_credit;
        return _this;
    }
    return CurrentAccount;
}(Account));
var saving1 = new SavingAccount(101, "Raj", 2000, 5.8);
var current1 = new CurrentAccount(201, "Rohan", 30000, 8);
var saving2 = new SavingAccount(102, "Dia", 20000, 6);
var current2 = new CurrentAccount(202, "Sia", 3500, 7);
var saving3 = new SavingAccount(103, "Rohit", 25000, 5.9);
var current3 = new CurrentAccount(203, "Rahul", 3000, 9);
var result = Account.totalbalance(saving1, saving2, saving3, current1, current2, current3);
console.log(saving1, saving2, saving3, current1, current2, current3);
