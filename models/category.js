const { Schema, model } = require('mongoose');

const schema = new Schema({
    name: String,
    parentId: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    }
});

const Category = model('Category', schema);

module.exports = { Instance: Category, Schema };