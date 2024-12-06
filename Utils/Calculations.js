
const  GetRevenue = (data) =>{
    return data.reduce((sum, item) => sum + item.total_value, 0)
}


module.exports = { GetRevenue };
