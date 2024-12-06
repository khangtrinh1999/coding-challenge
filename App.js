const GetDataFromJSON = require('./Utils/GetDataFromJSON');
const {GetRevenue, GetExpense, GetProfitGrossMargin,GetNetProfitMargin} = require('./Utils/Calculations');
const {currencyFormatter,percentageFormatter} = require('./Utils/Formatter')
try{
    const data = GetDataFromJSON('./data.json');
    const revenue = GetRevenue(data);
    console.log(`Revenue: $${currencyFormatter(revenue)}`);
    const expense = GetExpense(data)
    console.log(`Expense: $${currencyFormatter(expense)}`);
    const grossProfitMargin = GetProfitGrossMargin(data);
    console.log(`Gross Profit Margin: ${percentageFormatter(grossProfitMargin)}%`);
    const netProfitMargin= GetNetProfitMargin(data)
    console.log(`Net Profit Margin: ${percentageFormatter(netProfitMargin)}%`);
}
catch (error) {
    console.error("An error occurred:", error.message);
}


