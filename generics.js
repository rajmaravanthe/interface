var personT = (function () {
    function personT() {
        this.name = 'Hrithik';
        this.age = 40;
        this.makeup = 'lipstick';
        this.dress = 'choodidar';
    }
    personT.prototype.humanDetails = function () {
        return "He is " + this.name + " and " + this.age + ", she wore " + this.dress + " and put " + this.makeup;
    };
    return personT;
}());
var Person = new personT();
document.write(Person.humanDetails());
