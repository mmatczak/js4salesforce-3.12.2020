const UserService = require('./user-service');

describe('UserService', () => {
    let service;

    beforeEach(() => {
        service = new UserService();
    });

    it('gets John Smith', () => {
        // given
        expect.hasAssertions();
        const userId = 1234;
        // when
        return service.getOne(userId)
            .then(user => {
                // then
                expect(user.id).toBe(userId);
                expect(user.firstName).toBe('John');
                expect(user.lastName).toBe('Smith');
            })
    });
});
