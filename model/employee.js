class Employee extends Person {
    constructor(name, surname, dob, gender, department, clients = []) {
        super(name, surname, dob, gender);
        this.department = department;
        this.clients = clients;
    }

    addClient(client) {
        this.clients.push(client);
    }

    totalEarnings() {
        // const totalEarnings = this.clients.reduce((a, c) => a + c.totalExpenses(), 0);
        // return totalEarnings;

        let accumulator = 0;

        for (const client of this.clients) {
            accumulator += client.totalExpenses();
        }
        return accumulator;
    }

    bestClient() {

        // return this.clients.reduce((a, c) => a !== null? (a.totalExpenses() > c.totalExpenses() ? a : c) : c,null);

        // return this.clients.reduce((a, c) => {
        //     if(a === null){
        //         return c;
        //     }
        //     if (a.totalExpenses() > c.totalExpenses()){
        //         return a;
        //     } else {
        //         return c;
        //     }

        // },null)

        if (this.clients.length === 0) {
            return null;
        }

        let bestClient = this.clients[0];

        for (let i = 1; i < this.clients.length; i++) {
            const client = this.clients[i];

            if (client.totalExpenses() > bestClient.totalExpenses()) {
                bestClient = client;
            }
        }
        return bestClient;
    }

    toString(){
        return super.toString() + 
        'Dipartimento: ' + this.department + '\n' +
        'Guadagni totali: ' + this.totalEarnings().toFixed(2) + '€\n' +
        'Miglior cliente:\n' + this.bestClient();
    }
}