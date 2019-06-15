const { Schema, model } = require('mongoose');

const schema = new Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    text: String
});

const Article = model('Article', schema);

module.exports = Article;