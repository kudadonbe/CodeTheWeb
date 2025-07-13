// banking-final-project-v2.js
// Purpose: Full JavaScript banking system using bank-based structure
// Author: KD (Kudadonbe)
// Date:

let banks = [];

function createBank(bankName) {
    let bank = { name: bankName, accounts: [] };
    banks.push(bank);
    console.log(`Bank created: ${bankName}`);
}

function findBank(bankName) {
    return banks.find(b => b.name === bankName);
}

function findAccount(bankName, accountNumber) {
    let bank = findBank(bankName);
    if (!bank) return null;
    return bank.accounts.find(acc => acc.accountNumber === accountNumber);
}

function createAccount(bankName, name, accNumber, currency) {
    let bank = findBank(bankName);
    if (!bank) {
        console.log(`Bank not found: ${bankName}`);
        return;
    }
    let account = {
        accountNumber: accNumber,
        accountName: name,
        currency: currency,
        balance: 0,
        transactions: []
    };
    bank.accounts.push(account);
    console.log(`Account created for ${name} at ${bankName}`);
}

function recordTransaction(account, type, amount, relatedAccount) {
    const txn = {
        id: Date.now(),
        type: type,
        amount: amount,
        date: new Date().toLocaleDateString(),
        balanceAfter: account.balance,
        related: relatedAccount || null
    };
    account.transactions.push(txn);

    console.log(`\n--- ${type} Slip ---`);
    console.log(`Transaction ID:  ${txn.id}`);
    console.log(`Account Number:  ${account.accountNumber}`);
    console.log(`Account Name:    ${account.accountName}`);
    if (relatedAccount) {
        console.log(`Related Account: ${relatedAccount}`);
    }
    console.log(`Amount:          ${account.currency} ${amount.toFixed(2)}`);
    console.log(`Date:            ${txn.date}`);
    console.log(`Balance After:   ${account.currency} ${txn.balanceAfter.toFixed(2)}`);
    console.log(`------------------------\n`);
}

function deposit(bankName, accNumber, amount) {
    let acc = findAccount(bankName, accNumber);
    if (!acc) {
        console.log("Deposit failed: Account not found.");
        return;
    }
    if (amount <= 0) {
        console.log("Deposit failed: Amount must be greater than 0.");
        return;
    }
    acc.balance += amount;
    recordTransaction(acc, "Deposit", amount);
}

function withdraw(bankName, accNumber, amount) {
    let acc = findAccount(bankName, accNumber);
    if (!acc) {
        console.log("Withdrawal failed: Account not found.");
        return;
    }
    if (amount <= 0) {
        console.log("Withdrawal failed: Amount must be greater than 0.");
        return;
    }
    if (acc.balance < amount) {
        console.log("Withdrawal failed: Insufficient balance.");
        return;
    }
    acc.balance -= amount;
    recordTransaction(acc, "Withdrawal", amount);
}

function transfer(fromBank, fromAccNum, toBank, toAccNum, amount) {
    let fromAcc = findAccount(fromBank, fromAccNum);
    let toAcc = findAccount(toBank, toAccNum);

    if (!fromAcc || !toAcc) {
        console.log("Transfer failed: One or both accounts not found.");
        return;
    }
    if (fromAcc.currency !== toAcc.currency) {
        console.log("Transfer failed: Currency mismatch.");
        return;
    }
    if (amount <= 0) {
        console.log("Transfer failed: Amount must be greater than 0.");
        return;
    }
    if (fromAcc.balance < amount) {
        console.log("Transfer failed: Insufficient balance.");
        return;
    }

    fromAcc.balance -= amount;
    toAcc.balance += amount;
    recordTransaction(fromAcc, "Transfer Out", amount, toAccNum);
    recordTransaction(toAcc, "Transfer In", amount, fromAccNum);
}

function printMiniStatement(bankName, accNumber) {
    let acc = findAccount(bankName, accNumber);
    if (!acc) {
        console.log("Account not found.");
        return;
    }

    const fmt = new Intl.NumberFormat("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    console.log(`\n=== Mini Statement ===`);
    console.log(`Account: ${acc.accountNumber} (${acc.accountName})`);
    console.log(`Currency: ${acc.currency}`);
    console.log(`Balance: ${fmt.format(acc.balance)}\n`);
    console.log("-----------------------------------------------------------------------------------------");
    console.log("Date        | Details                        |      Dr      |      Cr      |   Balance");
    console.log("-----------------------------------------------------------------------------------------");

    for (let t of acc.transactions) {
        let dr = "", cr = "", details = t.type;
        if (t.type === "Deposit" || t.type === "Transfer In") {
            dr = fmt.format(t.amount);
            if (t.type === "Transfer In" && t.related)
                details = `Transfer from: ${t.related}`;
        } else if (t.type === "Withdrawal" || t.type === "Transfer Out") {
            cr = fmt.format(t.amount);
            if (t.type === "Transfer Out" && t.related)
                details = `Transfer to: ${t.related}`;
        }

        console.log(
            `${t.date.padEnd(11)} | ${details.padEnd(30)} | ${dr.padStart(12)} | ${cr.padStart(12)} | ${fmt.format(t.balanceAfter).padStart(12)}`
        );
    }

    console.log("-----------------------------------------------------------------------------------------\n");
}

function printBalance(bankName, accNumber) {
    let acc = findAccount(bankName, accNumber);
    if (acc) {
        const fmt = new Intl.NumberFormat("en-US", { minimumFractionDigits: 2 });
        console.log(`Balance for ${acc.accountName}: ${acc.currency} ${fmt.format(acc.balance)}`);
    } else {
        console.log("Account not found.");
    }
}

// --- DEMO ---
createBank("BML");
createBank("MIB");
createBank("HSBC");

createAccount("BML", "Hussain Adam", "7770000001290", "MVR");
createAccount("BML", "Fathimath Yumna", "7770000001291", "MVR");
createAccount("MIB", "Ali Arif", "1111000000101", "USD");

deposit("BML", "7770000001290", 10000);
withdraw("BML", "7770000001290", 200);
deposit("MIB", "1111000000101", 300);
transfer("MIB", "1111000000101", "BML", "7770000001290", 300);
transfer("BML", "7770000001290", "BML", "7770000001291", 300);

// Uncomment to see results
/*
printBalance("BML", "7770000001290");
printBalance("BML", "7770000001291");
printBalance("MIB", "1111000000101");

printMiniStatement("BML", "7770000001290");
printMiniStatement("BML", "7770000001291");
printMiniStatement("MIB", "1111000000101");
*/
