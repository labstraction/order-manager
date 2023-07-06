class Order {
    constructor(product, unitPrice, quantity) {
        this.product = product;
        this.unitPrice = unitPrice;
        this.quantity = quantity;
    }

    getTotalPrice(){
        return this.unitPrice * this.quantity;
    }

    get totalPrice(){
        return this.unitPrice * this.quantity;
    }

    toString(){
        const card = 
        `Product: ${this.product}
Prezzo Unitario: ${this.unitPrice.toFixed(2)} €
Quantità: ${this.quantity}
Prezzo Totale: ${this.totalPrice.toFixed(2)} €
        `;
        return card;
    }


}
