let mongoose = require('mongoose');
let product = require('./product');
let faker = require('faker');

mongoose.connect('mongodb://localhost:27017/http_client', { useNewUrlParser: true });

async function generateProducts() {
    for (let i = 0; i <= 10; i++) {
        let p = new product({
            name: faker.commerce.productName(),
            department: faker.commerce.department(),
            price: faker.commerce.price()
        });
        try {
            await p.save();
        }
        catch (error) {
            throw new Error("Error generating Products ",error);
        }
    }
}

generateProducts().then(() => {
    mongoose.disconnect();
    console.log("Ok");
}).catch((e) => {
    console.error(e);
});

