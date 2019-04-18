let myAccount = {
  name: "Shawan",
  expance: 0,
  income: 100
};

// Add Expance
function addExpance(account, amount) {
  return (account.expance += amount);
}

// Add Income

function addIncome(account, amount) {
  account.income += amount;
}

// Reset Account
function resetAccount(account) {
  account.expance = 0;
  account.income = 0;
}

function accountSummery(account) {
  let balance = account.income - account.expance;
  console.log(
    `Account for ${account.name} has $${balance}. $${
      account.income
    } income.And $${account.expance} in expance`
  );
}

addExpance(myAccount, 50);
accountSummery(myAccount);
addExpance(myAccount, 100);
addIncome(myAccount, 900);
accountSummery(myAccount);
resetAccount(myAccount);
accountSummery(myAccount);
