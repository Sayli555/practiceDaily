
class employee {
    constructor(Name,Experience,Division){
        this.name=Name;
        this.experince=Experience;
        this.division=Division
    }
    slogan(){
        return `I am ${this.name} , `
    }
    joiningYear(){
        return 2022- this.experince
    }
    static add(a,b){
        return a+b
    }
}

let e1=new employee("sayli",2,"A");

console.log(e1.joiningYear());
console.log(employee.add(10,20));



class programmer extends employee{
    constructor(Name,Experience,Division,Language,GitHub){
        super(Name,Experience,Division);
        this.Language=Language;
        this.GitHub=GitHub
    }

    faurate(){
        return this.Language
    }

    static add(a,b){
        return a*b
    }
}

let e2=new programmer("sayli",2,'A',"js","sayli555")

console.log(e2);
console.log(e2.faurate());
console.log(programmer.add(5,8))