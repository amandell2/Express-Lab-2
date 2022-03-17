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

routes.get("/custom-pizza-create", (req, res) => {
    const size = req.query.size as string;
    const toppings = Number(req.query.toppings);
    const glutenFree: boolean = !!req.query.crust;
    const instructions = req.query.instructions as string;
    res.render('custom-pizza-create',{
        size: size,
        toppings: toppings,
        crust: glutenFree,
        instructions: instructions
    });
})

routes.get("/custom-pizza-submit", (req, res) => {
    const size = req.query.size as string;
    const toppings: number = Number(req.query.toppings);
    const glutenFree: boolean = !!req.query.crust;
    const instructions = req.query.instructions as string;
    let price = 0;
    if(size === "small"){
       price += 7+(toppings*0.5) 
    }else if(size=== "medium"){
        price += 10+(toppings*1)
    }else if(size === "large"){
        price += 12+(toppings*1.25)
    };
    if(glutenFree){
        price += 2
    }
    let total = price.toFixed(2);
    res.render('custom-pizza-submit',{
        size: size,
        toppings: toppings,
        crust: glutenFree,
        instructions: instructions,
        price: total
    });
})

export default routes; 