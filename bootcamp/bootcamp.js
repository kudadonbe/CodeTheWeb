// banking-fundamentals.js
// Purpose: One-day lesson that demonstrates the core JavaScript fundamentals
//          through a simple banking scenario (balances, deposits, withdrawals).
// Author:  KD (Kudadonbe)
// Date:    2025-07-09

/* -------------------------------------------------
   STEP-BY-STEP FUNDAMENTALS
   ------------------------------------------------- */

// ===== 1. Variables =====
let balance = 0; // Number
const customerName = "John Doe"; // String
console.log("Initial Balance:", balance, "Customer:", customerName);

// ===== 2. Data Types =====
const accountNumber = "SAV001"; // String
const depositAmount = 500; // Number
const isActive = true; // Boolean
const lastTransaction = null; // Null
let pendingAmount; // Undefined
console.log(
  "Account:",
  accountNumber,
  "Deposit:",
  depositAmount,
  "Active?",
  isActive
);

// ===== 3. Arrays =====
const transactions = [300, 150, 200]; // Array
console.log("Transactions:", transactions);

// ===== 4. Objects =====
const accountExample = {
  accountNumber: "SAV002",
  accountName: "Jane Smith",
  balance: 0,
  accountType: "Savings",
};
console.log(
  "Account Number:",
  accountExample.accountNumber,
  "Name:",
  accountExample.accountName
);

// ===== 5. Loops =====
for (let i = 0; i < transactions.length; i++) {
  console.log(`Transaction ${i + 1}: ${transactions[i]}`);
}

// ===== 6. Conditionals =====
const depositValue = 200;
if (depositValue > 0) {
  console.log("Valid deposit of:", depositValue);
} else {
  console.log("Invalid deposit amount!");
}

// ===== 7. Functions =====
const addToBalance = (currentBalance, amount) => currentBalance + amount;
const newBalance = addToBalance(balance, depositValue);
console.log("New Balance:", newBalance);

// ===== 8. Template Literals =====
const transAmount = 300;
console.log(`Deposited ${transAmount} to account ${accountNumber}`);

/* -------------------------------------------------
   FINAL MINI-PROJECT: SIMPLE BANKING SYSTEM
   ------------------------------------------------- */

// --- Data store: list of account objects ---
const accounts = [
  {
    accountNumber: "SAV001",
    accountName: "John Doe",
    balance: 0,
    accountType: "Savings",
    transactions: [],
  },
  {
    accountNumber: "CUR001",
    accountName: "Jane Smith",
    balance: 0,
    accountType: "Current",
    transactions: [],
  },
];

let transactionIdCounter = 0; // unique ID generator

// Helper: find an account by number
const findAccount = (accNo) =>
  accounts.find((acc) => acc.accountNumber === accNo);

// Helper: print a nice slip for any transaction object
const printSlip = (txn) => {
  console.log(`\n--- ${txn.type} Slip ---`);
  console.log(`Transaction ID : ${txn.id}`);
  console.log(`Account Number : ${txn.accountNumber}`);
  console.log(`Account Name   : ${txn.accountName}`);
  console.log(`Amount         : ${txn.amount}`);
  console.log(`Date           : ${txn.date}`);
  console.log(`Balance After  : ${txn.balanceAfter}`);
  console.log(`-----------------------\n`);
};

// Deposit money
const deposit = (accNo, amount) => {
  const acc = findAccount(accNo);
  if (!acc) {
    console.log("Account not found!");
    return;
  }
  if (amount <= 0) {
    console.log("Deposit amount must be positive!");
    return;
  }

  acc.balance += amount;
  transactionIdCounter++;
  const txn = {
    id: transactionIdCounter,
    type: "Deposit",
    amount,
    date: new Date().toLocaleDateString(),
    accountNumber: acc.accountNumber,
    accountName: acc.accountName,
    balanceAfter: acc.balance,
  };
  acc.transactions.push(txn);
  printSlip(txn);
  return acc.balance; // return new balance (good habit)
};

// Withdraw money
const withdraw = (accNo, amount) => {
  const acc = findAccount(accNo);
  if (!acc) {
    console.log("Account not found!");
    return;
  }
  if (amount <= 0) {
    console.log("Withdrawal amount must be positive!");
    return;
  }
  if (acc.balance < amount) {
    console.log("Insufficient funds!");
    return;
  }

  acc.balance -= amount;
  transactionIdCounter++;
  const txn = {
    id: transactionIdCounter,
    type: "Withdrawal",
    amount,
    date: new Date().toLocaleDateString(),
    accountNumber: acc.accountNumber,
    accountName: acc.accountName,
    balanceAfter: acc.balance,
  };
  acc.transactions.push(txn);
  printSlip(txn);
  return acc.balance;
};

// Print a mini statement
const printMiniStatement = (accNo) => {
  const acc = findAccount(accNo);
  if (!acc) {
    console.log("Account not found!");
    return;
  }

  console.log(`\n=== Mini Statement ===`);
  console.log(`Account Number : ${acc.accountNumber}`);
  console.log(`Account Name   : ${acc.accountName}`);
  console.log(`Account Type   : ${acc.accountType}`);
  console.log(`Current Balance: ${acc.balance}`);
  console.log(`Transaction History:`);
  acc.transactions.forEach((t, idx) => {
    console.log(
      `${idx + 1}. ${t.type} (ID ${t.id}) of ${t.amount} on ${
        t.date
      } → Balance: ${t.balanceAfter}`
    );
  });
  console.log(`=======================\n`);
};

/* --- Demo sequence --- */
deposit("SAV001", 1000); // ID 1
withdraw("SAV001", 400); // ID 2
deposit("CUR001", 500); // ID 3
printMiniStatement("SAV001");
printMiniStatement("CUR001");
