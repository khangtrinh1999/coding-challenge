
const GetDataFromJSON = require('../utils/getDataFromJSON');
const { GetRevenue } = require('../utils/calculations');

// TESTING GetRevenue function
// ASSUMPTIONS 
// total_cost is non null and positive number


// Mix test: Test if the functino only sum data entry with account_category == revenue
const test1 = () => {
    const data = GetDataFromJSON('./test/test-cases/case1.json');
    // CALCULATE REVENUE
    const revenue = GetRevenue(data);
    const expectedRevenue = 32431.0 + 32431.0 ;
    if (revenue === (expectedRevenue)) {
        console.log('- getRevenue Test 1 passed');
    } else {
        console.log('- getRevenue Test 1 failed');
    }
}

// Signel entry test: Test when there is 1 data entry with account_category == revenue
const test2 = () => {
    const data = GetDataFromJSON('./test/test-cases/case2.json');
    // CALCULATE REVENUE
    const revenue = GetRevenue(data);
    const expectedRevenue = 32431.0;
    if (revenue === (expectedRevenue)) {
        console.log('- getRevenue Test 2 passed');
    } else {
        console.log('- getRevenue Test 2 failed');
    }
}

// No entry test: Test when there is no data entry with account_category == revenue
const test3 = () => {
    const data = GetDataFromJSON('./test/test-cases/case3.json');
    // CALCULATE REVENUE
    const revenue = GetRevenue(data);
    const expectedRevenue = 0;
    if (revenue === (expectedRevenue)) {
        console.log('- getRevenue Test 3 passed');
    } else {
        console.log('- getRevenue Test 3 failed');
    }
}

// Empty test: test when there is no data entry
const test4 = () => {
    const data = GetDataFromJSON('./test/test-cases/case4.json');
    // CALCULATE REVENUE
    const revenue = GetRevenue(data);
    const expectedRevenue = 0;
    if (revenue === (expectedRevenue)) {
        console.log('- getRevenue Test 4 passed');
    } else {
        console.log('- getRevenue Test 4 failed');
    }
}




// Calling the test.
test1();
test2();
test3();
test4();
