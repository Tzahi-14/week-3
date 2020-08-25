// class Person {
//     constructor(name, startYear) {
//         this.name = name
//         this.startYear = startYear
//         this.courses = []
//     }

//     addCourse(course) {
//         this.courses.push(course)
//     }
// }
// class Student extends Person {
//     constructor(name, startYear) {
//         super(name, startYear)
//         this.grades = []
//     }

//     receiveGrade(courseName, finalGrade) {
//         this.grades.push({
//             course: courseName,
//             grade: finalGrade
//         })
//     }
// }
// const s1 = new Student("Ronda", 2017)
// console.log(s1.name) //prints "Ronda"

// s1.addCourse("Algebra II")
// console.log(s1.courses) //prints ["Algebra II"]


// class Teacher extends Person {
//     constructor(name,startYear,salary){
//         super(name,startYear)
//         this.salary = salary
//     }

//     giveGrade(student,courseName,finalGrade){
//         student.receiveGrade(courseName,finalGrade)
//     }
// }


// const s1 = new Student("Ronda", 2017)
// const t1 = new Teacher("Cassandra", 2002, 40000)
// const p1 = new Person("Anon", 1999)

// s1 instanceof Person //true
// t1 instanceof Teacher //true
// t1 instanceof Person // true
// s1 instanceof Teacher//false
// t1 instanceof Student // false
// p1 instanceof Person // true
// p1 instanceof Student //false
// p1 instanceof Teacher // false

// s1 instanceof p1 // not defined


// class Person {
//     constructor(name, startYear) {
//         this.name = name
//         this.startYear = startYear
//         this.courses = []
//     }

//     addCourse(course) {
//         this.courses.push(course)
//     }
// }
// class Student extends Person {
//     constructor(name, startYear) {
//         super(name, startYear)
//         this.grades = []
//     }

//     receiveGrade(courseName, finalGrade) {
//         this.grades.push({
//             course: courseName,
//             grade: finalGrade
//         })
//     }
// }

// class Teacher extends Person {
//     constructor(name,startYear,salary){
//         super(name,startYear)
//         this.salary = salary
//         this.courses = {}
//     }

//     addCourse(course){
//         if (this.courses[course]){
//             return this.courses[course]++
//         }
//         this.courses[course]=1
//     }

//     giveGrade(student,courseName,finalGrade){
//         student.receiveGrade(courseName,finalGrade)
//     }
// }

// class TeachingAssistant extends Teacher {
//     constructor(name, startYear, salary) {
//         super(name, startYear, salary)
//     }
// }




// Override the addCourse method and courses attribute in the Teacher class.

// Instead of courses being an array, it should be an object
// The object should track the amount of times the teacher adds the course
// Instead of addCourse pushing to an array (which now doesn't exist), it should update the course count in courses

// const t1 = new Teacher("Cassandra", 2002, 40000)
// t1.addCourse("Algebra II")
// t1.addCourse("Algebra II")
// t1.addCourse("Trigonometry")
// console.log(t1.courses) //should print {Algebra II: 2, Trigonometry: 1}


// class Person {
//     constructor(name, startYear) {
//         this.name = name
//         this.startYear = startYear
//         this.courses = []
//     }

//     addCourse(course) {
//         this.courses.push(course)
//     }
// }

// class Teacher extends Person {
//     constructor(name,startYear,salary){
//         super(name,startYear)
//         this.salary = salary
//         this.courses = {}
//     }

//     addCourse(course){
//         if (this.courses[course]){
//             return this.courses[course]++
//         }
//         this.courses[course]=1
//     }

//     giveGrade(student,courseName,finalGrade){
//         student.receiveGrade(courseName,finalGrade)
//     }
// }

// class TeachingAssistant extends Teacher {
//     constructor(name, startYear, salary) {
//         super(name, startYear, salary)
//     }
// }


// class Page{
//     constructor(text){
//         this.text = text
//     }
// }

// class Notebook{
//     constructor(pageNum){
//         this.pageNum = pageNum
//         this.pages = []
//     }

//     write(page){
//         this.pages.push(page)
//     }
// }

// class Diary extends Notebook{
//     constructor(pageNum, owner){
//         super(pageNum)
//         this.owner = owner
//     }
// }

// const myDiary = new Diary(50, "Shila")
// const mathNotebook = new Notebook(200)
// const p1 = new Page("Pythagoreas realized tha the sum of the squares of the sides of a right triangle will equal the square of the hypoteneuse")
// myDiary.pages.push(new Page("I think I'm in love with a Greek man."))

// console.log(myDiary.pages[0].text)//greek nam
// console.log(p1.text)//Pythagoreas...
// console.log(mathNotebook.pages[0].text)//error

// console.log(p1 instanceof Page)//true
// console.log(myDiary instanceof Notebook) //true
// console.log(myDiary instanceof mathNotebook) //error


// class Planet {
//     constructor(name){
//         this.name = name
//     }
// }

// let earth = new Planet
// earth.name = "Earth 2.0"
// console.log(earth.name)

// class Image{
//     constructor(url, width, height, db){
//         this.url = url
//         this.width = width || 150 
//         this.height = height || 150    
//         this.db = db
//     }

//     save(){
//         this.db.save(JSON.stringify(this))
//     }
// }

// class SQL_DB{
//     constructor(){}
//     save(str){
//         //wicked code that saves to SQL database
//     }
// }

// class Mongo_DB{
//     constructor(){}
//     save(str){
//         //wicked code that saves to Mongo database
//     }
// }

// const sqlDB = new SQL_DB()
// const mongoDB = new Mongo_DB()
// const pic = new Image("https://a3.amazon.com/93112/ist.png", null, null, sqlDB)

// pic.save()


// class APIManager{
//     constructor(route){
//         this.route = route
//         this.data = {}
//     }

//     fetch(){
//         $.get(this.route, function(response){
//             this.data = response
//         })
//     }
// }

// class Renderer{
//     construcor(scriptID, containerID, apiManager){
//         this.scriptID = scriptID
//         this.containerID = containerID
//         this.apiManager = apiManager
//     }

//     render(){    
//         let source = $("#" + this.scriptID).html()
//         let template = Handlebars.compile(source)
//         $("#" + this.containerID).append(template(this.apiManager.data))
//     }
// }

// const foodApi = new APIManager("/foodRoute")
// const renderer = new Renderer("food-template", "container", foodApi)

// foodApi.fetch()
// renderer.render()

//ex1

class Person {
    constructor(name, startYear) {
        this.name = name
        this.startYear = startYear
        this.courses = []
    }

    addCourse(course) {
        this.courses.push(course)
    }
}

class Teacher extends Person {
    constructor(name, startYear, salary) {
        super(name, startYear)
        this.salary = salary
        this.courses = {}
    }

    addCourse(course) {
        if (this.courses[course]) {
            return this.courses[course]++
        }
        this.courses[course] = 1
    }

    giveGrade(student, courseName, finalGrade) {
        student.receiveGrade(courseName, finalGrade)
    }
}
class Student extends Person {
    constructor(name, startYear) {
        super(name, startYear)
        this.grades = []
    }

    receiveGrade(courseName, finalGrade) {
        this.grades.push({
            course: courseName,
            grade: finalGrade
        })
    }
}

class TeachingAssistant extends Teacher {
    constructor(name, startYear, salary) {
        super(name, startYear, salary)
    }
}

class Principal extends Person {
    constructor(name, startYear) {
        super(name, startYear)
        this.teachers = []
        this.students = []
    }
    hireTeacher(teacher) {
        // this.teachers.push(new Teacher(teacher))
        // console.log(`${this.name} just hired ${teacher.name}`)
        this.teachers.push(teacher)
        console.log(`${this.name} just hired ${teacher.name}`)
    }
    recruitStudent(student) {
        // this.students.push(new Student(student))
        this.students.push(student)
            console.log(`${this.name} just recruited ${student.name}`)
    }
    expelStudent(student) {
        for (let i in this.students) {
            if (this.students[i].name === student.name) {
              return this.students.splice(i, 1)
            }
        }
    }
    transferStudent(student,principal){
        this.expelStudent(student)
        principal.recruitStudent(student)
    }  
}


const p1 = new Principal("Martin", 1991)
const p2 = new Principal("Martha", 1990)

const t1 = new Teacher("Cassandra", 2002, 40000)
const t2 = new Teacher("Kevin", 2006, 30000)

const s1 = new Student("Ronda", 2017)
const s2 = new Student("Byron", 2016)

//1 & 2
p1.hireTeacher(t1) //should print "Martin just hired Cassandra"
console.log(p1.teachers) //should print Array(1) [Teacher] - the teacher should be Cassandra

p1.hireTeacher(t2) //should print "Martin just hired Kevin"
console.log(p1.teachers) //should print Array(2) [Teacher, Teacher]

//3 & 4
p1.recruitStudent(s1)
p1.recruitStudent(s2)
console.log(p1.students) //should print Array(2) [Student, Student]

//5
p1.expelStudent(s1)
console.log(p1.students) //should print Array(1) [Student] - the student should be Byron

//6
p1.transferStudent(s2, p2)
console.log(p1.students) //should print Array(0) []
console.log(p2.students) //should print Array(1) [Student] - the student should be Byron


// Create a Principal class.

// It should inherit from Person, and have the following additional attributes and methods:

// teachers - an array of Teacher objects
// hireTeacher - a method that receives a teacher and adds it to the teachers array
// It should also console log "<principal name> just hired <teacher name>"
// students an array of Student objects
// recruitStudent - a method that receives a student and adds it to the students array
// expelStudent - a method that receives a student and removes it from the studentsarray (for now, you can just search by name)
// transferStudent - a method that receives a student and a principal, removes the student from students and pushes it to the other principal's students array

