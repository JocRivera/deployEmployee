const mongoose = require('mongoose')

const connect = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/ecommerce', {
        })
        console.log('Database connected successfully')
    } catch (error) {
        console.error(error)
    }
}
module.exports = { connect }