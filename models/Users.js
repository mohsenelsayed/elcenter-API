const mg = require('mongoose');

const userSchema = mg.Schema({
    name: {
        type: String,
        required: true
    },
    name_l: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    centers: {
        type: [String],
        required: false,
        default: undefined
    }
})

module.exports = mg.model('Users', userSchema);