class Person{

    constructor(name, surname, dob, gender){
        this.name = name;
        this.surname = surname;
        this.dob = dob;
        this.gender = gender;
    }

    get age(){
        const nowTimeStamp = new Date().getTime();
        const dobTimeStamp = this.dob.getTime();

        const deltaTimeStamp = nowTimeStamp - dobTimeStamp;
        const age = Math.floor(deltaTimeStamp / ( 1000 * 60 * 60 * 24 * 365));

        
        return age;

    }

    toString(){

       return 'Nome: ' + this.name + '\n' +
        'Cognome: ' + this.surname + '\n' +
        'Data di nascita: ' + this.dob + '\n' +
        'Età: ' + this.age + '\n' +
        'Genere: ' + this.gender + '\n';
    }
}