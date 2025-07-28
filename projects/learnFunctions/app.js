// app.js
// console.log("this sj file is liked to html");


let sales = [
    { itemCode: 1, itemName: "Red Bedsheet", cp: 50, sp: 150 },
    { itemCode: 5, itemName: "Green Bedsheet", cp: 40,sp: 550 },
    { itemCode: 2, itemName: "Yello Bedsheet", cp: 35, sp: 350 }
];

// make a function to caculate total profit of the day















function calcProfit(sales) {

    let totalProfit = 0;

    sales.forEach(sale => {
        let profit = sale.sp - sale.cp;
        console.log(`Profit from ${sale.itemName} is ${profit}`);
        // totalProfit = totalProfit + profit;
        totalProfit += profit;
        
    });


    return totalProfit
}



import { listRecords, createRecord } from './airtableService.js';

(async () => {
  const records = await listRecords();
  console.log("Airtable Records:", records);

//   const newRecord = await createRecord({ Name: "Test Frontend", Age: 25 });
//   console.log("New Record:", newRecord);
})();

















let displayProfit = calcProfit(sales)

console.log(displayProfit);





