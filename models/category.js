const { Schema, model } = require('mongoose');

const schema = new Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    parentId: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    }
});

const Category = model('Category', schema);

module.exports = Category;