const exp = require("constants")

/// Calculate Revenue by filtering data entry with account_category == revenue then sum their total_value
const GetRevenue = (data) => {
    return data.filter((item) => item.account_category === 'revenue')
        .reduce((sum, item) => sum + item.total_value, 0)
}
/// Calculate Expense by filtering data entry with account_category == expense then sum their total_value
const GetExpense = (data) => {
    return data.filter((item) => item.account_category === 'expense')
        .reduce((sum, item) => sum + item.total_value, 0)
}
/// Caculate the sum of all total_value of data entry with account_type == sale and value_type == debit.
/// This function will be use to calculate gross profit margin
const GetSalesDebitSum = (data) => {
    return data.filter((item) => item.account_type === 'sales' && item.value_type === 'debit')
        .reduce((sum, item) => sum + item.total_value, 0)
}

// Calculate Gross Profit Margin by deviding GetSalesDebitSum by revenue
const GetGrossProfitMargin = (data) => {
    const salesDebitSum = GetSalesDebitSum(data)
    const revenue = GetRevenue(data)
    if (revenue == 0) return 0
    return (salesDebitSum / revenue) * 100
}

// Caculate Net Profit Margin, using GetRevenue and GetExpense function
const GetNetProfitMargin = (data) => {
    const revenue = GetRevenue(data)
    const expense = GetExpense(data)
    const subtract = revenue - expense
    if (revenue == 0) return 0
    return (subtract / revenue) * 100
}

/// Caculating Assets
const getAssets = (data) => {
    const creditAssets = getCreditAssets(data)
    const debitAssets = getDebitAssets(data)
    return debitAssets - creditAssets
}


/// calculating credit asset by filter all data entry with account_category == assets and value_type == credit
/// with accoun_type == current or bank or current_accounts-receivable
const getCreditAssets = (data) => {
    return data.filter((item) => item.account_category === 'assets' && item.value_type === 'credit' &&
        (item.account_type === 'current' || item.account_type === 'bank' || item.account_type === 'current_accounts_receivable'))
        .reduce((sum, item) => sum + item.total_value, 0)
}

/// calculating credit asset by filter all data entry with account_category == assets and value_type == debit
/// with accoun_type == current or bank or current_accounts-receivable
const getDebitAssets = (data) => {
    return data.filter((item) => item.account_category === 'assets' && item.value_type === 'debit' &&
        (item.account_type === 'current' || item.account_type === 'bank' || item.account_type === 'current_accounts_receivable'))
        .reduce((sum, item) => sum + item.total_value, 0)
}


/// Caculating Liabilities 
const getLiabilities = (data) => {
    const creditLiabilities = getCreditLiabilities(data)
    const debitLiabilities = getDebitLiabilities(data)
    return creditLiabilities - debitLiabilities
}

/// calculating credit liability by filter all data entry with account_category == assets and value_type == credit
/// with accoun_type == current or bank or current_accounts-receivable
const getCreditLiabilities = (data) => {
    return data.filter((item) => item.account_category === 'liability' && item.value_type === 'credit' &&
        (item.account_type === 'current' || item.account_type === 'current_accounts_receivable'))
        .reduce((sum, item) => sum + item.total_value, 0)
}

/// calculating credit liability by filter all data entry with account_category == assets and value_type == debit
/// with accoun_type == current or bank or current_accounts-receivable
const getDebitLiabilities = (data) => {
    return data.filter((item) => item.account_category === 'liability' && item.value_type === 'debit' &&
        (item.account_type === 'current' || item.account_type === 'current_accounts_receivable'))
        .reduce((sum, item) => sum + item.total_value, 0)
}

/// Calculating Working Capital Ratio using total Assets and total Liabilities
const getWorkingCapitalRatio = (data) => {
    const assets = getAssets(data)
    const liabilities = getLiabilities(data)
    if (liabilities == 0) return 0
    return (assets / liabilities) * 100
}


module.exports = { GetRevenue, GetExpense, GetGrossProfitMargin, GetNetProfitMargin, getWorkingCapitalRatio, getLiabilities, getAssets };
