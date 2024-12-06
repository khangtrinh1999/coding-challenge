const exp = require("constants")

const GetRevenue = (data) => {
    return data.reduce((sum, item) => sum + item.total_value, 0)
}

const GetExpense = (data) => {
    return data.filter((item) => item.account_category === 'expense')
    .reduce((sum, item) => sum + item.total_value, 0)
}

const GetSalesDebitSum = (data) => {
    return data.filter((item) => item.account_type === 'sales' && item.value_type ==='debit')
    .reduce((sum, item) => sum + item.total_value, 0)
}

const GetProfitGrossMargin = (data) =>{
    const salesDebitSum = GetSalesDebitSum(data)
    const revenue = GetRevenue(data)
    return (salesDebitSum/revenue)*100
}

const GetNetProfitMargin = (data) =>{
    const revenue = GetRevenue(data)
    const expense = GetExpense(data)
    const subtract = revenue - expense
    return (subtract/revenue)*100
}
module.exports = { GetRevenue, GetExpense, GetProfitGrossMargin,GetNetProfitMargin};
