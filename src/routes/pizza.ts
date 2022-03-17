// require the express module
import express from "express";
 
// create a new Router object
const routes = express.Router();

routes.get('/', (req, res) => {
    res.render('homepage');
});

routes.get("/specialty-pizza", (req, res) => {
    
})

routes.get("/review", (req, res) => {
    const name = req.query.name as string;
    const comment = req.query.comment as string;
    const rating = req.query.rating as string;
})

export default routes; 