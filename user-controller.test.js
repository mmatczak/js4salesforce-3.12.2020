const UserCtrl = require('./user-controller')
const UserService = require('./user-service')

describe('UserCtrl', function () {
    it('initializes form with values from service', () => {
        // given
        expect.hasAssertions();
        const firstName = 'Test First';
        const lastName = 'Test Last';

        const userServiceMock = {
            getOne: jest.fn(id => Promise.resolve({id, firstName, lastName}))
        }
        const userId = 1234;
        const controller = new UserCtrl(userServiceMock, userId);
        document.body.innerHTML = `
        <form>
        <label for="firstName">First name:</label>
        <input id="firstName">
        <label for="lastName">Last name:</label>
        <input id="lastName">
        <button>Save</button>
        </form>`;
        // when
        return controller.initializeForm()
            .then(() => {
                // then
                expect(userServiceMock.getOne).toHaveBeenCalledWith(userId);

                const firstNameInput = document.querySelector('#firstName');
                expect(firstNameInput).not.toBeNull();
                expect(firstNameInput.value).toBe(firstName);

                const lastNameInput = document.querySelector('#lastName');
                expect(lastNameInput).not.toBeNull();
                expect(lastNameInput.value).toBe(lastName);
            });
    });
});
