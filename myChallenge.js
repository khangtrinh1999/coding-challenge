const GetDataFromJSON = require('./utils/getDataFromJSON');
const { GetRevenue, GetExpense, GetGrossProfitMargin, GetNetProfitMargin, getWorkingCapitalRatio } = require('./utils/calculations');
const { currencyFormatter, percentageFormatter } = require('./utils/formatter')
try {
    const data = GetDataFromJSON('./data.json');

    // CALCULATE REVENUE
    const revenue = GetRevenue(data);
    console.log(`Revenue: $${currencyFormatter(revenue)}`);

    // CALCULATE EXPENSE
    const expense = GetExpense(data)
    console.log(`Expense: $${currencyFormatter(expense)}`);

    // CALCULATE GROSS PROFIT MARGIN
    const grossProfitMargin = GetGrossProfitMargin(data);
    console.log(`Gross Profit Margin: ${percentageFormatter(grossProfitMargin)}%`);

    // CALCULATE NET PROFIT MARGIN
    const netProfitMargin = GetNetProfitMargin(data)
    console.log(`Net Profit Margin: ${percentageFormatter(netProfitMargin)}%`);

    // CALCULATE WORKING CAPITAL RATIO
    const workingCapitalRatio = getWorkingCapitalRatio(data)
    console.log(`Working Capital Ratio: ${percentageFormatter(workingCapitalRatio)}%`);

}
catch (error) {
    console.error("An error occurred:", error.message);
}


