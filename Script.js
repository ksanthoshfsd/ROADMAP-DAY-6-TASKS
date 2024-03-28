

//DAY 6 TASKS 1.1(a)

class Movie {
    constructor(Title,Studio,Rating){
        this.Title = Title;
        this.Studio = Studio ;
        this.Rating = Rating;
    }
}
const Obj = new Movie ("Billa","Ananda Picture Circuit","7.3")
console.log(`Title = ${Obj.Title}
Studio = ${Obj.Studio}
Rating = ${Obj.Rating}`);


//DAY 6 TASKS 1.2(b)

class Movies {
    constructor(Titles,Studios,Ratings="PG"){
        this.Titles = Titles;
        this.Studios = Studios;
        this.Ratings = Ratings;
    }
}
const Obje = new Movies ("Billa","Ananda Picture Circuit",)
console.log(Obje);


//DAY 6 TASKS 1.3(C)

class Movi {
    constructor(title, rating) {
        this.title = title;
        this.rating = rating;
    }
}

function getPG(moviess) {
    const pgMoviess = [];
    for (let movi of moviess) {
        if (movi.rating === "PG") {
            pgMoviess.push(movi);
        }
    }
    return pgMoviess;
}

const moviess = [
    new Movi("Captain Miller", "PG"),
    new Movi("Jai Bhim", "PG"),
    new Movi("Meters Down", "5.6"),
    new Movi("Parking", "7.9"),
    new Movi("Chithha", "8.3"),
    new Movi("Ayalaan", "6.0"),
    new Movi("Vikram", "PG"),
    new Movi(" Raatchasan", "8.3"),
    new Movi("Soorarai Pottru", "PG")

];

const pgMoviess = getPG(moviess);
console.log(pgMoviess);


//DAY 6 TASKS 1.4(d)

class Moviee {
    constructor(Titlee,Studioo,Ratingg="PG13"){
        this.Titlee = Titlee;
        this.Studioo = Studioo ;
        this.Ratingg = Ratingg;
    }
}
const Objecc = new Moviee ("Casino Royale","Eon Productions")
console.log(Objecc);


//DAY 6 TASKS 2.1

class Circle {
    constructor(Radius,Colour){
        this.Radius = Radius;
        this.Colour = Colour;
    }
    get Radius(){
        return this.radius
    }
    set Radius(n){
        this.radius = n;
    }
    get Color(){
        return this.color;
    }
    set Color(c){
        this.color = c
    }
    get toString(){
        return `"Circle[radius= ${this.radius} ,color = ${this.color}]"`
    }
    get area(){
        return Math.PI*Math.pow(this.radius,2)
    }
    get circumference(){
        return 2*Math.PI*this.radius
    }
}
let obj = new Circle(1.0,"red") 
console.log(obj.Color);
console.log(obj.Radius);
console.log(obj.toString);
console.log(obj.area);
console.log(obj.circumference);
obj.Radius=3.5
console.log(obj.Radius);
obj.Color="Aqua Blue"
console.log(obj.Color);


//DAY 6 TASKS 3.1

class Person {
    constructor(Name,Age,Gender,MartialStatus,Contact,Email){
        this.Name = Name;
        this.Age = Age ;
        this.Gender = Gender;
        this.MartialStatus = MartialStatus;
        this.Contact = Contact;
        this.Email = Email;
    }
}
const Objec = new Person ("Sandy","10","Male","Single","654646454","sn@gmail.com");
console.log(Objec);


//DAY 6 TASKS 4.1

class UberPriceCalculator {
    constructor(distanceKm) {
        this.perKmRate = 50;
        this.distanceKm = distanceKm;
    }

    calculateFare() {
        return this.distanceKm * this.perKmRate;
    }
}

// Example usage:
const distance = 10; // Distance traveled in kilometers
const calculator = new UberPriceCalculator(distance);
const fare = calculator.calculateFare();
console.log("Estimated fare:", fare, "Rs");
