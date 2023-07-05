

const order1 = new Order()

const order2 = new Order()

const order3 = new Order()

const order4 = new Order()

const order5 = new Order()


const client1 = new Client()

const client2 = new Client()


client1.addOrder(order1)
client1.addOrder(order2)
client1.addOrder(order3)


client2.addOrder(order4)
client2.addOrder(order5)


const employee = new Employee();

employee.addClient(client1);
employee.addClient(client2);


console.log(employee.bestClient())