
const currencyFormatter = (data) =>{
    const roundedNumber = Math.floor(data);
    return roundedNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

module.exports = { currencyFormatter };