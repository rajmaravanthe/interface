
interface man {
    name,
    age
}
interface women {
    makeup,
    dress
}
class personT<T> implements man, women {// Class is the generic of type T
    name = 'Hrithik';
    age = 40;
    makeup = 'lipstick';
    dress = 'choodidar';

    humanDetails(){
       return `He is ${this.name} and ${this.age}, she wore ${this.dress} and put ${this.makeup}`;
    }

}

var Person = new personT();

document.write(Person.humanDetails());