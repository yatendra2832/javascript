class user{
    constructor(username,id){
        this.username=username
        this.id=id
    }
    logMe(){
        return `Username: ${this.username} , Id: ${this.id}`
    }
   static createId(){
        const uniqueId=Math.round(Math.random()*10000+1)
        return `${uniqueId}ax23`;
    }
    //static method cannot be instantiated to other classes
}

const user1= new user('yatendra singh','1')
console.log(user.createId())// that will create the unique id

class Teacher extends user{
    constructor(username,email,id){
        super(username,id)
        this.email=email
    }
}

const teacher1 = new Teacher('Yatendra Singh','yatendrayadav2832@gmail.com')
// console.log(teacher1.createId()) that will show the error as it cannot be access by the inherited classes
teacher1.logMe()