export class Customer3 {
    private firstName: string;
    private lastName: string;
    private age: string;

    constructor(firstName: string, lastName: string, age: string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    public greeter(){
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }

    public GetAge(){
        return this.age;
    }
}
