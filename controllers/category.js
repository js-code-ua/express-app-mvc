const HttpStatus = require('http-status-codes');
const { categoryValidate } = require('../validators/category');

module.exports = ({ router, actions, models }) => {

    const routes = router();
    const category = actions.category(models);

    routes.get('/', async (req, res) => {
        const categories = await category.getAll();

        res.send(categories);
    });

    routes.get('/:id', async (req, res) => {
        const target = await category.get(req.params.id)

        res.send(target);
    });

    routes.post('/', async (req, res) => {
        try {
            const reqData = categoryValidate.add(req.body.payload);
            const target = await category.add(reqData);

            res.send(target);
        } catch (e) {
            res
                .status(HttpStatus.BAD_REQUEST)
                .send(e);
        }
    });

    routes.delete('/:id', async (req, res) => {
        const target = await category.delete(req.params.id)

        res.send(target);
    });

    routes.put('/:id', async (req, res) => {
        const target = await category.update(req.params.id, req.body.payload);

        res.send(target);
    });

    return routes;
};