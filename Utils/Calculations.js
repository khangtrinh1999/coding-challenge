const exp = require("constants")





const GetRevenue = (data) => {
    return data.filter((item) => item.account_category === 'revenue')
    .reduce((sum, item) => sum + item.total_value, 0)
}

const GetExpense = (data) => {
    return data.filter((item) => item.account_category === 'expense')
        .reduce((sum, item) => sum + item.total_value, 0)
}

const GetSalesDebitSum = (data) => {
    return data.filter((item) => item.account_type === 'sales' && item.value_type === 'debit')
        .reduce((sum, item) => sum + item.total_value, 0)
}

const GetProfitGrossMargin = (data) => {
    const salesDebitSum = GetSalesDebitSum(data)
    const revenue = GetRevenue(data)
    if (revenue ==0 ) return 0
    return (salesDebitSum / revenue) * 100
}

const GetNetProfitMargin = (data) => {
    const revenue = GetRevenue(data)
    const expense = GetExpense(data)
    const subtract = revenue - expense
    if (revenue ==0 ) return 0
    return (subtract / revenue) * 100
}

const getAssets = (data) => {
    const creditAssets = getCreditAssets(data)
    const debitAssets = getDebitAssets(data)
    return debitAssets - creditAssets
}

const getCreditAssets = (data) => {
    return data.filter((item) => item.account_category === 'assets' && item.value_type === 'credit' &&
        (item.account_type === 'current' || item.account_type === 'bank' || item.account_type === 'current_accounts_receivable'))
        .reduce((sum, item) => sum + item.total_value, 0)
}
const getDebitAssets = (data) => {
    return data.filter((item) => item.account_category === 'assets' && item.value_type === 'debit' &&
        (item.account_type === 'current' || item.account_type === 'bank' || item.account_type === 'current_accounts_receivable'))
        .reduce((sum, item) => sum + item.total_value, 0)
}


const getLiabilities = (data) => {
    const creditLiabilities = getCreditLiabilities(data)
    const debitLiabilities = getDebitLiabilities(data)
    return creditLiabilities - debitLiabilities
}

const getCreditLiabilities = (data) => {
    return data.filter((item) => item.account_category === 'liability' && item.value_type === 'credit' &&
        (item.account_type === 'current' || item.account_type === 'current_accounts_receivable'))
        .reduce((sum, item) => sum + item.total_value, 0)
}
const getDebitLiabilities = (data) => {
    return data.filter((item) => item.account_category === 'liability' && item.value_type === 'debit' &&
        (item.account_type === 'current' || item.account_type === 'current_accounts_receivable'))
        .reduce((sum, item) => sum + item.total_value, 0)
}

const getWorkingCapitalRatio = (data) => {
    const assets = getAssets(data)
    const liabilities = getLiabilities(data)
    if (liabilities ==0 ) return 0
    return (assets / liabilities) * 100
}


module.exports = { GetRevenue, GetExpense, GetProfitGrossMargin, GetNetProfitMargin, getWorkingCapitalRatio, getLiabilities, getAssets };
