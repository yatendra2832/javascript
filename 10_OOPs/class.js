
class user{
    constructor(username,email,password){
        this.username=username
        this.email=email
        this.password=password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUserName(){
        return `${this.username.toLowerCase()}`
    }
}

const user1= new user('Yatendra Singh','yatendrayadav2832@gmail.com',"@Shri123")
console.log(user1.encryptPassword())
console.log(user1.changeUserName())