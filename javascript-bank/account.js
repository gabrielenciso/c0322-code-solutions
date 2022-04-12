/* exported Account */

function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (amount <= 0 || typeof amount !== 'number' || isNaN(amount) || !Number.isInteger(amount)) {
    return false;
  }

  var transaction = new Transaction('deposit', amount);
  this.transactions.push(transaction);
  return true;
};

Account.prototype.withdraw = function (amount) {
  if (amount <= 0 || typeof amount !== 'number' || isNaN(amount) || !Number.isInteger(amount)) {
    return false;
  }

  var transaction = new Transaction('withdrawal', amount);
  this.transactions.push(transaction);
  return true;
};

Account.prototype.getBalance = function () {
  var balance = 0;
  for (var i = 0; i < this.transactions.length; i++) {
    var currentTransaction = this.transactions[i];
    if (currentTransaction.type === 'deposit') {
      balance += currentTransaction.amount;
    } else if (currentTransaction.type === 'withdrawal') {
      balance -= currentTransaction.amount;
    }
  }
  return balance;
};
