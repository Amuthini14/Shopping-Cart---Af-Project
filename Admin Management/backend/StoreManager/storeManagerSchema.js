const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let storemanger = new Schema({
    EmpId: {
        type: String
    },
    SmId: {
        type: String
    },
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    email: {
        type: String
    },
    city: {
        type: String
    },
    uname: {
        type: String
    },
    password: {
        type: String
    }
});

module.exports = mongoose.model('storemanger', storemanger);