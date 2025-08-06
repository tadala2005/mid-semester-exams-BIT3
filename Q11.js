//literal object
let order = {
    orderId: "ORD-2025-0045",
    customer: {
        id: CUST-1001,
        name: "joe doe",
        email: "joe.doe@gamil.com",
    },
    address: 97439879,
    items: {
        productID: "P-001",
        name: "wireless mouse",
        quantity: 2,
        price: 7500

    },
    payment:{
        method: "mobile money",
        Phone: 89898989,
        transID: "ie732trgfuybe"
    },
    delivary: {
        method:"courrier" ,
        status: "in transit",
        estimatedDelivary: Date()
    },
    discountCodes:"newenf",
    orderTotal:400045,
    createdAt: new Date(),
    updatedAt: new Date(),
}
    
//class object
class order1 {
    constructor(orderId, customer, items,payment, delivery,discountCodes,orderTotal,createdAt,updatedAt) {
        this.orderId = orderId;
        this.customer = customer;
        this.items = items;
        this.payment =payment;
        this.delivary =delivery;
        this.discountCodes =discountCodes;
        this.orderTotal =orderTotal;
        this.createdAt = new Date();
        this.updatedAt = new Date()
    }
}

// fuction construstor

function order2 (orderId, customer, items,payment, delivery,discountCodes,orderTotal,createdAt,updatedAt) {
        this.orderId = orderId;
        this.customer = customer;
        this.items = items;
        this.payment =payment;
        this.delivary =delivery;
        this.discountCodes =discountCodes;
        this.orderTotal =orderTotal;
        this.createdAt = new Date();
        this.updatedAt = new Date()
    }
//add new item bought
order.items.push({
    productID: "P-001",
        name: "wireless mouse",
        quantity: 2,
        price: 7500
});

//update tranctionID
order.payment.transID += 1;


//update order total
order.orderTotal += 1


//Demonstrate the conversion of the object to JSON and back to JS object
let orderJSON = JSON.stringify(order);// Convert to JSON string
console.log(orderJSON); // Display the JSON string


orderJSON = JSON.parse(orderJSON);// Convert back to JS object
console.log(orderJSON); // Display the JS object
        