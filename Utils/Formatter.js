/// A comma is used to separate every 3 digits in the thousands, millions, billions, and trillions
// Cents are removed
const currencyFormatter = (data) => {
    const roundedNumber = Math.floor(data);
    return roundedNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
/// to one decimal digit 
const percentageFormatter = (data) => {
    return data.toFixed(1)
}

module.exports = { currencyFormatter, percentageFormatter };