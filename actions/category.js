const { categoryValidate } = require('../validators/category');

module.exports = ({ category }) => ({
    add: (payload) => {
        categoryValidate.add(payload);
        
        const {name, parentId} = payload;
        const c = new category.Instance({
            name,
            parentId: parentId
                ? category.Schema.Types.ObjectId(parentId)
                : null
        });

        return c.save();
    },

    delete: (_id) => {
        return category.Instance.findOneAndDelete({_id});
    },

    update: (_id, payload) => {
        return category.Instance.findOneAndUpdate({_id}, payload);
    },

    get: (_id) => {
        return category.Instance.findById(_id);
    },

    getAll: () => {
        return category.Instance.find();
    }
});