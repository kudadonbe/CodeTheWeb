// banking-fundamentals-template.js
// Purpose: One-day lesson plan to teach JavaScript fundamentals through a banking scenario
// Author: KD (Kudadonbe)
// Date: 

/* -------------------------------------------------
STEP-BY-STEP FUNDAMENTALS
------------------------------------------------- */

// ===== 1. Variables =====
let accountName = "Hussain Adam";           // String
let accountBalance = 10000;                 // Number

// ===== 2. Data Types =====
let accNumber = "7770000001290";            // String
let depositAmount = 200;                    // Number
let isActive = true;                        // Boolean
let lastTxn = null;                         // Null
let pendingAmount;                          // Undefined

console.log(accountName, accNumber, depositAmount, isActive, lastTxn, pendingAmount);

// ===== 3. Arrays =====
let transactions = [10000, -200, 300];
console.log("Transactions:", transactions);

// ===== 4. Objects =====
let account = {
  accountNumber: accNumber,
  accountName: accountName,
  balance: accountBalance,
  currency: "MVR",
  transactions: [],
  status: isActive
};
console.log(account);

// ===== 5. Loops =====
for (let i = 0; i < transactions.length; i++) {
  console.log(`Transaction ${i + 1}: ${transactions[i]}`);
}

// ===== 6. Conditionals =====
if (depositAmount > 0) {
  console.log("Valid deposit.");
} else {
  console.log("Invalid deposit.");
}

// ===== 7. Functions =====
function depositSimple(accountObj, amount) {
  if (amount > 0) {
    accountObj.balance += amount;
    console.log("Deposited " + amount + " to " + accountObj.accountName);
  }
}
depositSimple(account, 300);

// ===== 8. Template Literals & Formatting =====
function formatAmount(amount) {
  return amount.toFixed(2);
}

function printDepositSlip(accountObj, amount) {
  console.log(`\n--- Deposit Slip ---`);
  console.log(`Account: ${accountObj.accountNumber}`);
  console.log(`Name: ${accountObj.accountName}`);
  console.log(`Amount: ${accountObj.currency} ${formatAmount(amount)}`);
  console.log(`New Balance: ${accountObj.currency} ${formatAmount(accountObj.balance)}\n`);
}
printDepositSlip(account, 300);

let label = "Account:";
let value = "7770000001290";
console.log(label.padEnd(12) + value);

let dr = "200.00";
let cr = "";
let balance = "9800.00";
console.log("Date        | Details                  |    Dr    |   Cr    | Balance");
console.log("2025-07-13  | Deposit                  |" + dr.padStart(9) + " |" + cr.padStart(8) + " | " + balance.padStart(8));

/* -------------------------------------------------
FULL SYSTEM LOGIC: V3
------------------------------------------------- */

// banking-final-project-v3.js
// Purpose: Professional JavaScript banking system with unique account numbers and smart transfer handling
// Author: KD (Kudadonbe)
// Date:

// === GLOBALS ===
let banks = [];
let lastAccountCounter = 0;

const fmt = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});

// === UTILITIES ===
function generateAccountNumber(bank) {
  const prefix = bank.name.slice(0, 3).toUpperCase();
  const timestamp = Date.now().toString().slice(-6);
  const counter = (++lastAccountCounter).toString().padStart(3, "0");
  return `${prefix}${timestamp}${counter}`;
}

function getBankFromAccountNumber(accountNumber) {
  const prefix = accountNumber.slice(0, 3).toUpperCase();
  return banks.find(b => b.name.slice(0, 3).toUpperCase() === prefix) || null;
}

function findAccount(accountNumber) {
  const bank = getBankFromAccountNumber(accountNumber);
  if (!bank) return null;
  return bank.accounts.find(acc => acc.accountNumber === accountNumber);
}

// === BANK MANAGEMENT ===
function createBank(bankName) {
  let bank = { name: bankName, accounts: [] };
  banks.push(bank);
  console.log(`Bank created: ${bankName}`);
}

// === ACCOUNT MANAGEMENT ===
function createAccount(bankName, name, currency) {
  const bank = banks.find(b => b.name === bankName);
  if (!bank) {
    console.log(`Bank not found: ${bankName}`);
    return;
  }

  const accNumber = generateAccountNumber(bank);
  const account = {
    accountNumber: accNumber,
    accountName: name,
    currency: currency,
    balance: 0,
    transactions: []
  };

  bank.accounts.push(account);
  console.log(`Account created for ${name} at ${bankName}. Account Number: ${accNumber}`);
}

// === TRANSACTION RECORDING ===
function recordTransaction(account, type, amount, relatedAccount) {
  const txn = {
    id: Date.now(),
    type,
    amount,
    date: new Date().toLocaleDateString(),
    balanceAfter: account.balance,
    related: relatedAccount || null
  };
  account.transactions.push(txn);

  console.log(`\n--- ${type} Slip ---`);
  console.log(`Transaction ID:  ${txn.id}`);
  console.log(`Account Number:  ${account.accountNumber}`);
  console.log(`Account Name:    ${account.accountName}`);
  if (relatedAccount) console.log(`To:              ${relatedAccount}`);
  console.log(`Amount:          ${account.currency} ${fmt.format(amount)}`);
  console.log(`Date:            ${txn.date}`);
  console.log(`Balance After:   ${account.currency} ${fmt.format(txn.balanceAfter)}`);
  console.log(`------------------------\n`);
}

// === CORE OPERATIONS ===
function deposit(accNumber, amount) {
  const acc = findAccount(accNumber);
  if (!acc) return console.log("Deposit failed: Account not found.");
  if (amount <= 0) return console.log("Deposit failed: Amount must be greater than 0.");

  acc.balance += amount;
  recordTransaction(acc, "Deposit", amount);
}

function withdraw(accNumber, amount) {
  const acc = findAccount(accNumber);
  if (!acc) return console.log("Withdrawal failed: Account not found.");
  if (amount <= 0) return console.log("Withdrawal failed: Amount must be greater than 0.");
  if (acc.balance < amount) return console.log("Withdrawal failed: Insufficient balance.");

  acc.balance -= amount;
  recordTransaction(acc, "Withdrawal", amount);
}

function transfer(fromAccNum, toAccNum, amount) {
  const fromAcc = findAccount(fromAccNum);
  const toAcc = findAccount(toAccNum);

  if (!fromAcc || !toAcc) return console.log("Transfer failed: One or both accounts not found.");
  if (fromAcc.currency !== toAcc.currency) return console.log("Transfer failed: Currency mismatch.");
  if (amount <= 0) return console.log("Transfer failed: Amount must be greater than 0.");
  if (fromAcc.balance < amount) return console.log("Transfer failed: Insufficient balance.");

  fromAcc.balance -= amount;
  toAcc.balance += amount;

  recordTransaction(fromAcc, "Transfer Out", amount, toAcc.accountNumber);
  toAcc.transactions.push({
    id: Date.now(),
    type: "Transfer In",
    amount,
    date: new Date().toLocaleDateString(),
    balanceAfter: toAcc.balance,
    related: fromAcc.accountNumber
  });
}

// === REPORTING ===
function printMiniStatement(accNumber) {
  const acc = findAccount(accNumber);
  if (!acc) return console.log("Account not found.");

  console.log(`\n=== Mini Statement ===`);
  console.log(`Account: ${acc.accountNumber} (${acc.accountName})`);
  console.log(`Currency: ${acc.currency}`);
  console.log(`Balance: ${fmt.format(acc.balance)}\n`);
  console.log("------------------------------------------------------------------------------------------");
  console.log("Date        | Details                         |      Dr      |      Cr      |   Balance");
  console.log("------------------------------------------------------------------------------------------");

  for (let t of acc.transactions) {
    let dr = "", cr = "", details = t.type;
    if (t.type === "Deposit" || t.type === "Transfer In") {
      dr = fmt.format(t.amount);
      if (t.type === "Transfer In") details = `Transfer from: ${t.related}`;
    } else if (t.type === "Withdrawal" || t.type === "Transfer Out") {
      cr = fmt.format(t.amount);
      if (t.type === "Transfer Out") details = `Transfer to: ${t.related}`;
    }

    console.log(
      `${t.date.padEnd(11)} | ${details.padEnd(31)} | ${dr.padStart(12)} | ${cr.padStart(12)} | ${fmt.format(t.balanceAfter).padStart(12)}`
    );
  }

  console.log("------------------------------------------------------------------------------------------\n");
}

function printBalance(accNumber) {
  const acc = findAccount(accNumber);
  if (acc) {
    console.log(`Balance for ${acc.accountName}: ${acc.currency} ${fmt.format(acc.balance)}`);
  } else {
    console.log("Account not found.");
  }
}

// === DEMO ===
createBank("BML");
createBank("MIB");
createBank("HSBC");

createAccount("BML", "Hussain Adam", "MVR");
createAccount("BML", "Fathimath Yumna", "MVR");
createAccount("MIB", "Ali Arif", "USD");

const acc1 = banks[0].accounts[0].accountNumber;
const acc2 = banks[0].accounts[1].accountNumber;
const acc3 = banks[1].accounts[0].accountNumber;

deposit(acc1, 10000);
withdraw(acc1, 200);
deposit(acc3, 300);
transfer(acc3, acc1, 300);
transfer(acc1, acc2, 300);

// Uncomment to test
// printBalance(acc1);
// printMiniStatement(acc1);
