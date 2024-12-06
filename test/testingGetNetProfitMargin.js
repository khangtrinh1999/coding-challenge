
const GetDataFromJSON = require('../utils/getDataFromJSON');
const { GetNetProfitMargin, GetRevenue, GetExpense } = require('../utils/calculations');

// TESTING GetNetProfitMargin function
// ASSUMPTIONS 
// total_cost is non null and positive number



const test1 = () => {
    const data = GetDataFromJSON('./test/test-cases/case1.json');
    // CALCULATE REVENUE
    const revenue = GetNetProfitMargin(data);
    const expectedRevenue = ((GetRevenue(data) - GetExpense(data))/ GetRevenue(data) )*100;
    if (revenue === (expectedRevenue)) {
        console.log('- GetNetProfitMargin Test 1 passed');
    } else {
        console.log('- GetNetProfitMargin Test 1 failed');
    }
}


const test2 = () => {
    const data = GetDataFromJSON('./test/test-cases/case2.json');
    // CALCULATE REVENUE
    const revenue = GetNetProfitMargin(data);
    const expectedRevenue = ((GetRevenue(data) - GetExpense(data))/ GetRevenue(data) )*100;
    if (revenue === (expectedRevenue)) {
        console.log('- GetNetProfitMargin Test 2 passed');
    } else {
        console.log('- GetNetProfitMargin Test 2 failed');
    }
}


const test3 = () => {
    const data = GetDataFromJSON('./test/test-cases/case3.json');
    // CALCULATE REVENUE
    const revenue = GetNetProfitMargin(data);
    const expectedRevenue = 0;
    if (revenue === (expectedRevenue)) {
        console.log('- GetNetProfitMargin Test 3 passed');
    } else {
        console.log('- GetNetProfitMargin Test 3 failed');
    }
}

// Empty test: test when there is no data entry
const test4 = () => {
    const data = GetDataFromJSON('./test/test-cases/case4.json');
    // CALCULATE REVENUE
    const revenue = GetNetProfitMargin(data);
    const expectedRevenue = 0;
    if (revenue === (expectedRevenue)) {
        console.log('- GetNetProfitMargin Test 4 passed');
    } else {
        console.log('- GetNetProfitMargin Test 4 failed');
    }
}

// Test when there is more expense
const test5 = () => {
    const data = GetDataFromJSON('./test/test-cases/case13.json');
    // CALCULATE REVENUE
    const revenue = GetNetProfitMargin(data);
    const expectedRevenue = ((GetRevenue(data) - GetExpense(data))/ GetRevenue(data) )*100;
    if (revenue === (expectedRevenue)) {
        console.log('- GetNetProfitMargin Test 5 passed');
    } else {
        console.log('- GetNetProfitMargin Test 5 failed');
    }
}




// Calling the test.
test1();
test2();
test3();
test4();
test5();
