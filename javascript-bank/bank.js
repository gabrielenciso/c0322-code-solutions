/* exported Bank */

function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance <= 0 || typeof balance !== 'number' || !Number.isInteger(balance)) {
    return null;
  }

  var makeAccount = new Account(this.nextAccountNumber, holder);
  makeAccount.deposit(balance);

  this.accounts.push(makeAccount);
  this.nextAccountNumber++;
  return makeAccount.number;
};

Bank.prototype.getAccount = function (number) {
  number = parseInt(number);
  for (var i = 0; i < this.accounts.length; i++) {
    if (this.accounts[i].number === number) {
      return this.accounts[i];
    }
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  var total = 0;
  for (var i = 0; i < this.accounts.length; i++) {
    total += this.accounts[i].getBalance();
  }
  return total;
};
