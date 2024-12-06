
const currencyFormatter = (data) =>{
    const roundedNumber = Math.floor(data);
    return roundedNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
const percentageFormatter = (data) =>{
    return data.toFixed(1)
}

module.exports = { currencyFormatter,percentageFormatter };