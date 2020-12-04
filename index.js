class UserCtrl {
    constructor(users, userId) {
        this.users = users;
        this.userId = userId;
    }

    initializeForm() {
        this.bindToSubmit();
        this.users.getOne(this.userId)
            .then(user => {
                this.firstName = user.firstName;
                this.lastName = user.lastName;
            });
    }

    onSave(event) {
        event.preventDefault();
        const updatedUser = {
            id: this.userId,
            firstName: this.firstName,
            lastName: this.lastName
        }

        this.users.update(updatedUser)
            .then(user => {
                console.log(user);
            });
    }

    bindToSubmit() {
        const form = document.querySelector('form');
        if (form) {
            form.addEventListener('submit', this.onSave.bind(this));
        }
    }

    set firstName(value) {
        this.setInput('#firstName', value);
    }

    set lastName(value) {
        this.setInput('#lastName', value);
    }

    get firstName() {
        return this.getInput('#firstName');
    }

    get lastName() {
        return this.getInput('#lastName');
    }

    setInput(selector, value) {
        const inputElement = document.querySelector(selector);
        if (inputElement) {
            inputElement.value = value || '';
        }
    }

    getInput(selector) {
        const inputElement = document.querySelector(selector);
        return inputElement ? inputElement.value : '';
    }
}

class UserService {
    getOne(userId) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    id: userId,
                    firstName: 'John',
                    lastName: 'Smith'
                });
            }, 1000);
        });
    }

    update(user) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({...user});
            }, 1000);
        });
    }
}

const userId = 1234;
const userController = new UserCtrl(new UserService(), document, userId);
userController.initializeForm();
