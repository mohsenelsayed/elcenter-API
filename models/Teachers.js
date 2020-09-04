const mg = require('mongoose');

const teacherSchema = mg.Schema({
    name: {
        type: String,
        required: true
    },
    name_l: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    course_l: {
        type: String,
        required: true
    },
    centers: {
        type: [String],
        required: true
    }
})

module.exports = mg.model('Teachers', teacherSchema);