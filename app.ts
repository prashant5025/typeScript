// let num1 = "a";

// function calculate(num1: number, num2: number){
//     return num1 + num2;
// }

// console.log(calculate(num1, 2));

// function getTotal(numbers: number[]) {
//     return numbers.reduce(function (total, num) {
//         return total + num;
//     },0);
// }

// const user = {
//     name: "John",
//     age: 30,
//     role: 'professor'
    
    
// }

// console.log(user.name,user.age);

// type alias

// type User = {
//     name: string;
//     age: number;
//     role?: string;

// }

// const user: User = {
//     name: "prashant",
//     age: 30
// }

// function login(userData: User): User {
//     return userData;
// }

// console.log(login({name: "prashant", age: 30, role: "professor"}))


//costume types
// type ID = number | string;

// const userId: ID = '123';

// // interface

// interface Transaction {
//     payerAccountNumber: number,
//     payeeAccountNumber: number,
// }

// interface BankAccount {
//     accountNumber: number,
//     accountHolderName: string,
//     balance: number,
//     isActive: boolean,
//     transaction: Transaction[]
// }

// const bankAccount: BankAccount = {
//     accountNumber: 123456789,
//     accountHolderName: "Prashant",
//     balance: 1000,
//     isActive: true,
//     transaction: [
//         {
//             payerAccountNumber: 123456789,
//             payeeAccountNumber: 987654321
//         }
//     ]
    

// }

// console.log(bankAccount);

// interface Book {
//     name: string;
//     price: number;
// }

// interface Ebook extends Book {
//     fileSize: number;
//     format: string;
// }

// interface audioBook extends Ebook{

//     duration: number;
// }



// const book: audioBook = {
//     name: "The Alchemist",
//     price: 100,
//     fileSize: 1000,
//     format: "pdf",
//     duration: 5
// }

// console.log(book);

// type Book = {
//     name: string;
//     price: number;
// }

// type Ebook = Book & {
//     fileSize: number;
//     format: string;
// }

// type audioBook = Ebook & {
//     duration: number;
// }

// const book: audioBook = {
//     name: "The Alchemist",
//     price: 100,
//     fileSize: 1000,
//     format: "pdf",
//     duration: 5
// }

// console.log(book);

// type ID = number | string;

// // Narrowing
// function printID(id: ID) {
//     if (typeof id === 'string'){
//     console.log(id.toUpperCase());
//     }else{
//         console.log(id)
//     }
// }
// printID("number");

// function getFirstThree(x: string | number[]) {
    
//     return x.slice(0,3);
// }

// console.log(getFirstThree([1,2,3,4,5,6,7,8,9,10]));

//Generics


// function logArray(arg: any[]) {
//     console.log(arg)
//     return arg;
// }

// function logAnything<T>(arg: T): T {
//     console.log(arg)
//     return arg;
// }

// logAnything([1]);

interface HasAge {
    age: number;
}

interface Player extends HasAge {
    name: string;
}

function getOldest<T extends HasAge>(people: T[]): T {
    return people.sort((a,b) => b.age - a.age)[0];
}

const people = [
    {name: "John", age: 30},
    {name: "Jane", age: 25},
    {name: "Jack", age: 40}
]



const players: Player[] = [{name: "John", age: 30},
{name: "Jane", age: 25},
{name: "Jack", age: 40}]

const person = getOldest(players);

