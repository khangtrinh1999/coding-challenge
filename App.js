const GetDataFromJSON = require('./Utils/GetDataFromJSON');


try{
    data = GetDataFromJSON('./data.json');
    console.log(data);
}
catch (error) {
    console.error("An error occurred:", error.message);
}


