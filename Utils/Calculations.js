
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

const GetProfitMargin = (data) =>{
    const salesDebitSum = GetSalesDebitSum(data)
    const revenue = GetRevenue(data)
    return (salesDebitSum/revenue)*100
}
module.exports = { GetRevenue, GetExpense, GetProfitMargin};
