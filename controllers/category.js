module.exports = ({router}) => {
    
    const routes = router();

    routes.get('/', (req, res) => {
        res.send('All categories');
    });

    routes.get('/:id', (req, res) => {
        res.send(`Category ${req.params.id}`);
    });

    return routes;
};