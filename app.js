
const order1 = new Order('matite', 1.50, 20);

console.log(order1);

console.log(order1.totalPrice);

console.log(order1.toString());

const person1 = new Person('Damiano', 'Di Lionardo', new Date(1993,4,29), 'male');

console.log(person1);

const dob = new Date(1978,2,2);

const person2 = new Person('Andrea', 'Asioli', dob, 'male');

console.log(person2);

const client1 = new Client('Manuela', 'Ariotti', new Date(1988,5,22), 'female', 'via Martini 56');

console.log(client1);

const order2 = new Order('penne', 2.50, 100);

const ordersArray = [order1, order2];

const client2 = new Client('Cesare', 'Falzone', new Date(2003,2,4), 'male', 'via XX settembre 3', ordersArray);

console.log(client2);

const employee1 = new Employee('Ares', 'Fiumicelli', new Date(1993,4,25), 'male', 'cancelleria', [client1, client2]);

console.log(employee1);

// console.log(new Date().getTime());

console.log(employee1.age);

console.log(employee1.toString());

console.log(client2.totalExpenses());

console.log(client2.toString());

console.log(employee1.totalEarnings());

client1.addOrder(new Order('temperini', 3, 10));

console.log(employee1.totalEarnings());

console.log(employee1.bestClient());

console.log(employee1.toString());