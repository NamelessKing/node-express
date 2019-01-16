const express = require("express");
const bodyParser = require('body-parser');

const dishRouter = express.Router();
dishRouter.use(bodyParser.json());

dishRouter.route("/")
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end(`Will send all the dishes`);
    })
    .post((req, res, next) => {
        res.end(`Will add the dish: ${req.body.name} with details: ${req.body.description}`);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end(`PUT operation not supported on /dishes`);
    })
    .delete((req, res, next) => {
        res.end(`Deleting all the dishes`);
    });

module.exports = dishRouter;

//routes with parameters

/**app.get('/dishes/:dishId', (req, res, next) => {
    res.end(`Will send all details of dish: ${req.params.dishId}`);
});

app.post('/dishes/:dishId', (req, res, next) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /dishes/${req.params.dishId}`);
});

app.put('/dishes/:dishId', (req, res, next) => {
    res.write(`Updating the dish: ${req.params.dishId} \n`);
    res.end(`Will update the dish: ${req.body.name} with details ${req.body.description}`);
});

app.delete('/dishes/:dishId', (req, res, next) => {
    res.end(`Deleting dish ${req.params.dishId}`);
});
 */