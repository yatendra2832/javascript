const user = {
    _email: 'ys@gmail.com',
    _password: 'abc',
    // as we do not want that everyone will directly able to get the values
    get email() {
        return this._email.toUpperCase()
    },
    set email(val) {
        this._email = val
    },

    get password() {
        return this._password.toUpperCase()
    },
    set password(val) {
        this._password = val
    }
}
console.log(user.password);
console.log(user.email);