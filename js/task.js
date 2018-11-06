//'use strict';

function getPrice(arr, arr1) {
    return `Этот товар стоит ${arr}${this.price}${arr1}`
}

let intel = {
    name: 'Intel i7 3.5Ghz',
    price: 100,
    discount: 10,
    count: 50,
    getPrice: getPrice,
    calcTotalPrice: function () {
        this.totalPrice = this.count * this.price;
//        console.log(this);
        return this;
    },
    getTotalPrice: function () {
        return this.totalPrice;
    }
};

let amd = {
    name: 'AMD A8 3.5Ghz',
    price: 100,
    discount: 10,
    count: 50,
    getPrice: getPrice
};

setTimeout(getPrice.apply(intel, ['$', 'USD']), 1000);

// getPrice.call(intel, '$');
//getPrice.apply(intel, ['$', 'USD']);