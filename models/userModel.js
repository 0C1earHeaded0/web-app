class UserModel {
    name;
    email;

    static users = []

    constructor(email, name) {
        this.name = name;
        this.email = email;
        users.push(this);
    }


    async findOne(email) {
        users.forEach(element => {
            
        });
    }
}