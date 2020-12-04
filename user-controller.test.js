const UserCtrl = require('./user-controller')

describe('UserCtrl', function () {
    describe('DOM', () => {
        let userId, firstName, lastName, userServiceMock, formHtml, controller, updatePromise;

        beforeEach(() => {
            userId = 1234;
            firstName = 'Test First';
            lastName = 'Test Last';

            userServiceMock = {
                getOne: jest.fn(id => Promise.resolve({id, firstName, lastName})),
                update: jest.fn(user => updatePromise = Promise.resolve(user))
            }

            controller = new UserCtrl(userServiceMock, userId);

            formHtml = `
        <form>
        <label for="firstName">First name:</label>
        <input id="firstName">
        <label for="lastName">Last name:</label>
        <input id="lastName">
        <button>Save</button>
        </form>`
        });

        it('initializes form with values from service', () => {
            // given
            expect.hasAssertions();
            document.body.innerHTML = formHtml;
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

        it('updates user data on save', () => {
            // given
            const updatedFirstName = 'Updated First'
            const updatedLastName = 'Updated Last'
            expect.hasAssertions();
            document.body.innerHTML = formHtml;
            return controller.initializeForm().then(() => {
                // when
                const firstNameInput = document.querySelector('#firstName');
                firstNameInput.value = updatedFirstName
                const lastNameInput = document.querySelector('#lastName');
                lastNameInput.value = updatedLastName
                const buttonElement = document.querySelector('button');
                buttonElement.click();
                // const form = document.querySelector('form');
                // form.dispatchEvent(new Event('submit'));
                // then
                return updatePromise.then(() => {
                    expect(userServiceMock.update).toHaveBeenCalledWith({
                        id: userId, firstName: updatedFirstName, lastName: updatedLastName
                    });
                });
            });
        });
    });
});
