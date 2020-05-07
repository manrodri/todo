var mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "name cannot be blank"
    },
    completed: {
        Boolean,
        default: false
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

var Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;


// name
// completed
// create_date