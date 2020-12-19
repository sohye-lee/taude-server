import express from 'express';
import data from './data';


const app = express();

app.get('/api/products/:id', (req, res) => {
    const product = data.products.find(x => x._id === req.params.id);

    if(product) {
        res.send(product);
    } else {
        res.status(404).send({message: 'Product Not Found'});
    }
});

app.get('/api/products', (req, res) => {
    res.send(data.products);
});

app.get('/api/sellers', (req, res) => {
    res.send(data.sellers);
})

app.get('/', (req, res) => {
    res.send('Server is ready');
});

const port = 5000;
app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
});