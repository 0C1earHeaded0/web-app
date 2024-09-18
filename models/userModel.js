class UserModel {
    name;
    email;

    static users = []

    constructor(email, name) {
        this.name = name;
        this.email = email;
        users.push(this);
    }

    static async findOne(email) {
        users.forEach(element => {
            if (element.email == email) {
                return element;
            }
        });
    }
}