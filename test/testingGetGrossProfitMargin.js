
const GetDataFromJSON = require('../utils/getDataFromJSON');
const { GetProfitGrossMargin, GetRevenue } = require('../utils/calculations');

// TESTING GetProfitGrossMargin function
// ASSUMPTIONS 
// total_cost is non null and positive number


// Mix test: Test if the functino only sum data entry with account_type is set to sales and the value_type is set to debit
const test1 = () => {
    const data = GetDataFromJSON('./test/test-cases/case9.json');
    // CALCULATE REVENUE
    const grossprofitmargin = GetProfitGrossMargin(data);
    const expectedRevenue = ((2313.0 + 32431.0 + 1233.0) /GetRevenue(data))*100;
    if (grossprofitmargin === (expectedRevenue)) {
        console.log('- GetProfitGrossMargin Test 9 passed');
    } else {
        console.log('- GetProfitGrossMargin Test 9 failed');
    }
}

// Signel entry test: Test when there is 1 data entry with account_type is set to sales and the value_type is set to debit
const test2 = () => {
    const data = GetDataFromJSON('./test/test-cases/case10.json');
    // CALCULATE REVENUE
    const grossprofitmargin = GetProfitGrossMargin(data);
    const expectedRevenue = (( 32431.0 ) /GetRevenue(data))*100;
    if (grossprofitmargin === (expectedRevenue)) {
        console.log('- GetProfitGrossMargin Test 10 passed');
    } else {
        console.log('- GetProfitGrossMargin Test 10 failed');
    }
}

// No entry test: Test when there is no data entry with account_type is set to sales and the value_type is set to debit
const test3 = () => {
    const data = GetDataFromJSON('./test/test-cases/case11.json');
    // CALCULATE REVENUE
    const grossprofitmargin = GetProfitGrossMargin(data);
    const expectedRevenue = 0;
    if (grossprofitmargin === (expectedRevenue)) {
        console.log('- GetProfitGrossMargin Test 11 passed');
    } else {
        console.log('- GetProfitGrossMargin Test 11 failed');
    }
}

// // Empty test: test when there is no data entry
const test4 = () => {
    const data = GetDataFromJSON('./test/test-cases/case12.json');
    // CALCULATE REVENUE
    const grossprofitmargin = GetProfitGrossMargin(data);
    const expectedRevenue = 0;
    if (grossprofitmargin === (expectedRevenue)) {
        console.log('- GetProfitGrossMargin Test 12 passed');
    } else {
        console.log('- GetProfitGrossMargin Test 12 failed');
    }
}




// Calling the test.
test1();
test2();
test3();
test4();
