
const GetDataFromJSON = require('../utils/getDataFromJSON');
const { GetExpense } = require('../utils/calculations');

// TESTING GetExpense function
// ASSUMPTIONS 
// total_cost is non null and positive number


// Mix test: Test if the functino only sum data entry with account_category == revenue
const test5 = () => {
    const data = GetDataFromJSON('./test/test-cases/case5.json');
    // CALCULATE REVENUE
    const revenue = GetExpense(data);
    const expectedRevenue = 1830.18 + 31.5 ;
    if (revenue === (expectedRevenue)) {
        console.log('GetExpense Test 5 passed');
    } else {
        console.log('GetExpense Test 5 failed');
    }
}

// Signel entry test: Test when there is 1 data entry with account_category == revenue
const test6 = () => {
    const data = GetDataFromJSON('./test/test-cases/case6.json');
    // CALCULATE REVENUE
    const revenue = GetExpense(data);
    const expectedRevenue = 32431.0;
    if (revenue === (expectedRevenue)) {
        console.log('GetExpense Test 6 passed');
    } else {
        console.log('GetExpense Test 6 failed');
    }
}

// No entry test: Test when there is no data entry with account_category == revenue
const test7 = () => {
    const data = GetDataFromJSON('./test/test-cases/case7.json');
    // CALCULATE REVENUE
    const revenue = GetExpense(data);
    const expectedRevenue = 0;
    if (revenue === (expectedRevenue)) {
        console.log('GetExpense Test 7 passed');
    } else {
        console.log('GetExpense Test 7 failed');
    }
}

// Empty test: test when there is no data entry
const test8 = () => {
    const data = GetDataFromJSON('./test/test-cases/case8.json');
    // CALCULATE REVENUE
    const revenue = GetExpense(data);
    const expectedRevenue = 0;
    if (revenue === (expectedRevenue)) {
        console.log('GetExpense Test 8 passed');
    } else {
        console.log('GetExpense Test 8 failed');
    }
}




// Calling the test.
test5();
test6();
test7();
test8();
