class AccountService {
    getOne(id) {
        // return fetch(`http://my-server/accounts/${id}`)
        //     .then(function (response) {
        //         return response.json();
        //     });

        return new Promise((resolve, reject) => {
            setTimeout(function () {
                if (id < 0) {
                    reject('Invalid ID');
                } else {
                    resolve({
                        id, name: 'Some Client'
                    });
                }
            }, 1000);
        });
    }
}

// 1
const accounts = new AccountService();
// 2
accounts.getOne(-1234)
    .then(
        function (account) {
            console.log(account);
            return {...account, addOn: 'dvfg'};
        })
    .catch(
        function (error) {
            console.log('from Catch:');
            console.error(error);
        });
// .then(
//     function (account) {
//         console.log(account);
//     },
//     function (error) {
//         console.error(error);
//     }
// )
// 3
// console.log('End');
