const GetDataFromJSON = require('./Utils/GetDataFromJSON');
const {GetRevenue} = require('./Utils/Calculations');
const {currencyFormatter} = require('./Utils/Formatter')
try{
    const data = GetDataFromJSON('./data.json');
    const revenue = GetRevenue(data);
    console.log(`Revenue: $${currencyFormatter(revenue)}`);

}
catch (error) {
    console.error("An error occurred:", error.message);
}


