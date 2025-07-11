// banking-fundamentals-template.js
// Purpose: One-day lesson plan to teach JavaScript fundamentals through a banking scenario
// KD (Kudadonbe)
// Date:

/* -------------------------------------------------
   STEP-BY-STEP FUNDAMENTALS
   ------------------------------------------------- */

// ===== 1. Variables =====
// Scenario: Track account details like balance and customer info

// Number: Account balance
let balance = 0;

// String: Customer name
const customerName = "Ahmed Ali";

console.log("Initial Balance:", balance, "Customer:", customerName);

// ===== 2. Data Types =====
// Scenario: Represent different types of banking-related data

// String: Account number
const accountNumber = "7770000000001";
// Number: Deposit amount
const depositAmount = 500;
// Boolean: Account is active or not
const isActive = true;
// Null: Last transaction not available yet
const lastTransaction = null;
// Undefined: Pending amount
let pendingAmount;
// Use console.log to print all the above
console.log(
  "Account:",
  accountNumber,
  "Deposit:",
  depositAmount,
  "Active?",
  isActive
);

// ===== 3. Arrays =====
// Scenario: Store a list of transaction amounts
const transactions = [300, 150, 200]; // Array
console.log("Transactions:", transactions);

// ===== 4. Objects =====
// Scenario: Group all properties of one account together
const accountExample = {
  accountNumber: "7770000000002",
  accountName: "Ali Umar",
  balance: 0,
  accountType: "Savings",
  isActive: false,
  currency: "MVR"
};

console.log(
  "Account Number:",
  accountExample.accountNumber,
  "Name:",
  accountExample.accountName,
  "Active?", accountExample.isActive
);

// ===== 5. Loops =====
// Scenario: Print each transaction amount from the array
for (let i = 0; i < transactions.length; i++) {
    // console.log("Transaction " + (i + 1) + ": " + transactions[i]);
    console.log(`Transaction ${i + 1}: ${transactions[i]}`);
}

// ===== 6. Conditionals =====
// Scenario: Validate a deposit amount before processing
if (depositAmount > 0 ) {
     console.log("Valid deposit of:", depositAmount);
} else {
    console.log("Invalid deposit amount!");
    
}

// ===== 7. Functions =====
// Scenario: Reusable logic to add deposit to current balance

// ===== 8. Template Literals =====
// Scenario: Show a clean deposit confirmation message

/* -------------------------------------------------
   FINAL MINI-PROJECT: SIMPLE BANKING SYSTEM
   ------------------------------------------------- */

// Array of accounts (objects), each with account number, name, balance, type, and transaction history

// Unique transaction ID counter

// Function: Find account by account number

// Function: Deposit money into an account
// Steps:
// 1. Find account
// 2. Validate amount
// 3. Update balance
// 4. Push transaction to account's history
// 5. Print transaction slip

// Function: Withdraw money from an account
// Steps similar to deposit, but also check for sufficient funds

// Function: Print transaction slip
// Format: type, account number, name, amount, date, balance after

// Function: Print mini statement
// Show: account info + full transaction history

// DEMO SEQUENCE:
// 1. Deposit to account
// 2. Withdraw from account
// 3. Deposit to another account
// 4. Print mini statements
