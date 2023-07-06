class Client extends Person{

    constructor(name, surname, dob, gender, address, orders = []){
        super(name, surname, dob, gender);
        this.address = address;
        this.orders = orders;
    }

    addOrder(order){
        this.orders.push(order);
    }

    totalExpenses(){
        // const totalExpenses = this.orders.reduce((a, c) => a + c.totalPrice, 0);
        // return totalExpenses;

        let accumulator = 0;

        for (const order of this.orders) {
            accumulator += order.getTotalPrice();
        
        }
        return accumulator;
    }

    toString(){
        return super.toString() +
        'Indirizzo: ' + this.address + '\n' +
        'Spesa totale: ' + this.totalExpenses().toFixed(2) + '€\n'; 
    }
}