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
        const target = await category.add(req.body.payload)

        res.send(target);
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