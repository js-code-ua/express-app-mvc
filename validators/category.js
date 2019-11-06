const validator = require('validator');
const _ = require('lodash');
const ValidationError = require('../common/validator/ValidationError');

const categoryFields = [
    'name',
    'parentId',
];

class CategoryValidate {
    add(payload) {
        if (!payload.name) {
            throw new ValidationError('name', '"name" is required!');
        }

        if (payload.parentId && (
            !_.isString(payload.parentId)
            ||
            !validator.isUUID(payload.parentId))
        ) {
            throw new ValidationError('parentId', '"parentId" must be a String!');
        }

        return _.pick(payload, categoryFields);
    }

    delete(_id) {

    }

    update(_id, payload) {

    }
}

module.exports = {
    categoryValidate: new CategoryValidate(),
    CategoryValidate,
    categoryFields,
}