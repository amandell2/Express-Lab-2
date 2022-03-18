// require the express module
import express from "express";
 
// create a new Router object
const routes = express.Router();

routes.get('/', (req, res) => {
    res.render('homepage');
});

routes.get('/specialty-pizza', (req, res) => {
    const pizzaName: string = req.query.name as string;
    const price: number = parseInt(req.query.price as string);
    res.render('specialty-pizza', {
        name: pizzaName,
        price: price.toFixed(2)
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
    res.render('custom-pizza-create');
})

routes.post("/custom-pizza-submit", (req, res) => {
    const size: string = req.body.size;
    const toppings: number = parseInt(req.body.toppings as string);
    const glutenFree: boolean = !!req.body.crust;
    const instructions: string = req.body.instructions;
    let price = 0;
    if(size === "Small"){
       price = 7+(toppings*0.5) 
    }else if(size=== "Medium"){
        price = 10+(toppings*1)
    }else if(size === "Large"){
        price = 12+(toppings*1.25)
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