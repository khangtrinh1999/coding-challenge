
const GetDataFromJSON = require('../utils/getDataFromJSON');
const { GetExpense } = require('../utils/calculations');

// TESTING GetExpense function
// ASSUMPTIONS 
// total_cost is non null and positive number


// Mix test: Test if the functino only sum data entry with account_category == expense
const test1 = () => {
    const data = GetDataFromJSON('./test/test-cases/case5.json');
    // CALCULATE REVENUE
    const revenue = GetExpense(data);
    const expectedRevenue = 1830.18 + 31.5 ;
    if (revenue === (expectedRevenue)) {
        console.log('- GetExpense Test 1 passed');
    } else {
        console.log('- GetExpense Test 1 failed');
    }
}

// Signel entry test: Test when there is 1 data entry with account_category == expense
const test2 = () => {
    const data = GetDataFromJSON('./test/test-cases/case6.json');
    // CALCULATE REVENUE
    const revenue = GetExpense(data);
    const expectedRevenue = 32431.0;
    if (revenue === (expectedRevenue)) {
        console.log('- GetExpense Test 2 passed');
    } else {
        console.log('- GetExpense Test 2 failed');
    }
}

// No entry test: Test when there is no data entry with account_category == expense
const test3 = () => {
    const data = GetDataFromJSON('./test/test-cases/case7.json');
    // CALCULATE REVENUE
    const revenue = GetExpense(data);
    const expectedRevenue = 0;
    if (revenue === (expectedRevenue)) {
        console.log('- GetExpense Test 3 passed');
    } else {
        console.log('- GetExpense Test 3 failed');
    }
}

// Empty test: test when there is no data entry
const test4 = () => {
    const data = GetDataFromJSON('./test/test-cases/case8.json');
    // CALCULATE REVENUE
    const revenue = GetExpense(data);
    const expectedRevenue = 0;
    if (revenue === (expectedRevenue)) {
        console.log('- GetExpense Test 4 passed');
    } else {
        console.log('- GetExpense Test 4 failed');
    }
}




// Calling the test.
test1();
test2();
test3();
test4();
