const GetDataFromJSON = require('./Utils/GetDataFromJSON');
const {GetRevenue, GetExpense, GetProfitMargin} = require('./Utils/Calculations');
const {currencyFormatter,percentageFormatter} = require('./Utils/Formatter')
try{
    const data = GetDataFromJSON('./data.json');
    const revenue = GetRevenue(data);
    console.log(`Revenue: $${currencyFormatter(revenue)}`);
    const expense = GetExpense(data)
    console.log(`Expense: $${currencyFormatter(expense)}`);
    const grossProfitMargin = GetProfitMargin(data);
    console.log(`Gross Profit Margin: ${percentageFormatter(grossProfitMargin)}%`);
}
catch (error) {
    console.error("An error occurred:", error.message);
}


