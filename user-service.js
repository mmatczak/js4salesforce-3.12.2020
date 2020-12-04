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

// ESM
// export {UserService};
// CJS
module.exports = UserService;
