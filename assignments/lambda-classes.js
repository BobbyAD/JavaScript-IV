// CODE here for your Lambda Classes

class Person {
    constructor(persAttr) {
        this.name = persAttr.name;
        this.age = persAttr.age;
        this.location = persAttr.location;
        this.gender = persAttr.gender;
    }
    speak() {
        console.log(`Hello, my name is ${this.name}, I am from ${location}`);
    }
};

class Instructors extends Person {
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
};

class Students extends Person {
    constructor(studAttr) {
        super(studAttr);
        this.previousBackground = studAttr.previousBackground;
        this.className = studAttr.className;
        this.favSubjects = studAttr.favSubjects;
    }
    listsSubjects() {
        this.favSubjects.foreach(console.log, console);
    }
    PRAssignemnt(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
};

class ProjectManagers extends Instructors {
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

