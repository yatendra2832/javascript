class user{
    constructor (username){
        this.username=username
    }

    logMe(){
        console.log(`Username : ${this.username}`)
    }
}

class Teacher extends user{
constructor(username,email,password){
    super(username)
    this.email=email
    this.password=password
}
addCourses(){
    console.log(`A new course was added by ${this.username}`)
}
}

const user1= new Teacher('yatendra singh','yatendrayadav2832@gmail.com','@Shri123')
user1.addCourses()
user1.logMe()

const user2 = new user('Neeraj Kumar')
console.log(user2 instanceof Teacher)// that will return false as the user2 it is not the instance of the Teacher class
console.log(user2 instanceof user) // that will return true as the user2 is the instance of the user 
