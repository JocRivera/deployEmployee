const mongoose = require('mongoose')
const uri = "mongodb+srv://admin:admin@cluster0.wzzlckx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
const connect = async () => {
    try {
        await mongoose.connect(uri, clientOptions);
        console.log('Database connected successfully')
    } catch (error) {
        console.error(error)
    }
}
module.exports = { connect }