const mongoose = require('mongoose')

const PhoneSchema = new mongoose.Schema({
    phone: {
        type: String,
        required:true
    },
    name: {
        type: String,
        required:true
    }
})

module.exports = mongoose.model('phone', PhoneSchema);