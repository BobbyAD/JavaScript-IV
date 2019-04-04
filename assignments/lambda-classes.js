// CODE here for your Lambda Classes


//CLASSES

class Person {
    constructor(persAttr) {
        this.name = persAttr.name;
        this.age = persAttr.age;
        this.location = persAttr.location;
        this.gender = persAttr.gender;
    }
    speak() {
        console.log(`Hello, my name is ${this.name}, I am from ${this.location}`);
    }
};

class Instructor extends Person {
    constructor(instrAttr) {
        super(instrAttr);
        this.specialty = instrAttr.specialty;
        this.favLanguage = instrAttr.favLanguage;
        this.catchPhrase = instrAttr.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject) {
        console.log(`${student.name} recieves a perfect score on ${subject}`);
    }
    gradeStudent(student) {
        student.grade += Math.round((Math.random()-.5)*20);
    }
};

class Student extends Person {
    constructor(studAttr) {
        super(studAttr);
        this.previousBackground = studAttr.previousBackground;
        this.className = studAttr.className;
        this.favSubjects = studAttr.favSubjects;
        this.grade = studAttr.grade;
    }
    listsSubjects() {
        for (let i = 0; i < this.favSubjects.length; i++) {
            console.log(this.favSubjects[i]);
        }
    }
    PRAssignemnt(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
    graduate() {
        if (this.grade > 70) {
            console.log(`Congratulations, ${this.name}, you can graduate!`);
        }
        else {
            console.log(`Hey, listen! ${this.name} isn't good enough to leave!`);
        }
    }
};

class ProjectManager extends Instructor {
    constructor(pmAttr) {
        super(pmAttr);
        this.gradClassName = pmAttr.gradClassName;
        this.favInstructor = pmAttr.favInstructor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
};

//BEGIN TESTING

const anonymousOne = new Person({
    'name': 'Anon1',
    'age': 25,
    'location': 'placeOne',
    'gender': 'M',
});

const anonymousTwo = new Person({
    'name': 'Anon2',
    'age': 314123512346,
    'location': 'placeTwo',
    'gender': 'F',
});

const anonymousThree = new Person({
    'name': 'Anon3',
    'age': 2005,
    'location': 'placeThree',
    'gender': 'M',
});

// console.log(anonymousOne);
// console.log(anonymousTwo);
// console.log(anonymousThree);

// anonymousOne.speak();
// anonymousTwo.speak();
// anonymousThree.speak();

const instructorOne = new Instructor({
    'name': 'Instr1',
    'age': 1,
    'location': 'placeUno',
    'gender': 'A',
    'specialty': 'Thing1',
    'favLanguage': 'Lang1',
    'catchPhrase': 'Phrase1',
});

const instructorTwo = new Instructor({
    'name': 'Instr2',
    'age': 2,
    'location': 'placeDos',
    'gender': 'B',
    'specialty': 'Thing2',
    'favLanguage': 'Lang2',
    'catchPhrase': 'Phrase2',
});

const instructorThree = new Instructor({
    'name': 'Instr3',
    'age': 3,
    'location': 'placeTres',
    'gender': 'C',
    'specialty': 'Thing3',
    'favLanguage': 'Lang3',
    'catchPhrase': 'Phrase3',
});

// console.log(instructorOne);
// console.log(instructorTwo);
// console.log(instructorThree);

// instructorOne.demo('Java');
// instructorTwo.demo('Python');
// instructorThree.demo('JavaScript');

// Go below student test data for .grade() test

const student1 = new Student({
    'name': 'Stud1',
    'age': 10,
    'location': 'PlaceOne',
    'gender': 'A',
    'previousBackground': 'BGOne',
    'className': 'CSOne',
    'favSubjects': ['Sub1', 'Sub2', 'Sub3'],
    'grade': 50,
});

const student2 = new Student({
    'name': 'Stud2',
    'age': 12,
    'location': 'PlaceTwo',
    'gender': 'B',
    'previousBackground': 'BGTwo',
    'className': 'UITwo',
    'favSubjects': ['Subject1', 'Subject2', 'Subject3'],
    'grade': 60,
});

const student3 = new Student({
    'name': 'Stud3',
    'age': 14,
    'location': 'PlaceThree',
    'gender': 'C',
    'previousBackground': 'BGThree',
    'className': 'DataThree',
    'favSubjects': ['SUBJECT1', 'SUBJECT2', 'SUBJECT3'],
    'grade': 90,
});

// instructorOne.grade(student1, 'Java');
// instructorTwo.grade(student2, 'Python');
// instructorThree.grade(student3, 'JavaScript');

// console.log(student1);
// console.log(student2);
// console.log(student3);

// student1.listsSubjects();
// student2.listsSubjects();
// student3.listsSubjects();

// student1.PRAssignemnt('Java');
// student2.PRAssignemnt('Python');
// student3.PRAssignemnt('JavaScript');

const pmOne = new ProjectManager({
    'name': 'PM1',
    'age': 201,
    'location': 'home1',
    'gender': 'a',
    'specialty': 'Thing1',
    'favLanguage': 'Lang1',
    'catchPhrase': 'Phrase1',
    'gradClassName': 'CS1',
    'favInstructor': 'Instr1',
});

const pmTwo = new ProjectManager({
    'name': 'PM2',
    'age': 202,
    'location': 'home2',
    'gender': 'b',
    'specialty': 'Thing2',
    'favLanguage': 'Lang2',
    'catchPhrase': 'Phrase2',
    'gradClassName': 'CS2',
    'favInstructor': 'Instr2',
});

const pmThree = new ProjectManager({
    'name': 'PM3',
    'age': 203,
    'location': 'home3',
    'gender': 'c',
    'specialty': 'Thing3',
    'favLanguage': 'Lang3',
    'catchPhrase': 'Phrase3',
    'gradClassName': 'CS3',
    'favInstructor': 'Instr3',
});

// console.log(pmOne);
// console.log(pmTwo);
// console.log(pmThree);

// pmOne.standUp('web1');
// pmTwo.standUp('web2');
// pmThree.standUp('web3');

// pmOne.debugsCode(student1, 'Java');
// pmOne.debugsCode(student2, 'Python');
// pmOne.debugsCode(student3, 'JavaScript');


// Checking grade functionality, STRETCH GOAL


// console.log(student1.grade);
// console.log(student2.grade);
// console.log(student3.grade);

// instructorOne.gradeStudent(student1);
// console.log(student1.grade);
// instructorOne.gradeStudent(student1);
// console.log(student1.grade);
// student1.graduate();

// pmThree.gradeStudent(student3);
// console.log(student3.grade);
// pmThree.gradeStudent(student3);
// console.log(student3.grade);
// pmThree.gradeStudent(student3);
// console.log(student3.grade);
// student3.graduate();