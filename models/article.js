const { Schema, model } = require('mongoose');

const schema = new Schema({
    name: String,
    text: String
});

const Article = model('Article', schema);

module.exports = { Instance: Article, Schema };