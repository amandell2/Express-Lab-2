// require the express module
import express from "express";
 
// create a new Router object
const routes = express.Router();

routes.get('/', (req, res) => {
    res.render('homepage');
});

routes.get('/specialty-pizza', (req, res) => {
    const pizzaName: string = req.query.name as string;
    const price: string = req.query.price as string;
    res.render('specialty-pizza', {
        name: pizzaName,
        price: price
    });
});

routes.get("/review", (req, res) => {
    const name = req.query.name as string;
    const comment = req.query.comment as string;
    const rating = req.query.rating as string;
    res.render('review', {
        name: name,
        comment: comment,
        rating: rating
    });
})

routes.get("/confirmation", (req, res) => {
    const name = req.query.name as string;
    const comment = req.query.comment as string;
    const rating = req.query.rating as string;
    res.render('confirmation', {
        name: name,
        comment: comment,
        rating: rating
    });
})

export default routes; 