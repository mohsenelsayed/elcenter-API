const mg = require('mongoose');

const centerSchema = mg.Schema({
    name: {
        type: String,
        required: true
    },
    name_l: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    location_l: {
        type: String,
        required: true
    },
    O_Day: {
        type: String,
        required: false,
        default: undefined
    },
    C_Day: {
        type: String,
        required: false,
        default: undefined
    },
    teachers: {
        type: [String],
        required: false,
        default: undefined
    }
})

module.exports = mg.model('Centers', centerSchema);