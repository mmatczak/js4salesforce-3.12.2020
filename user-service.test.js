const UserService = require('./user-service');

describe('UserService', () => {
    it('gets John Smith', () => {
        // given
        const service = new UserService();
        // when
        // then
        expect(service).toBeDefined();
    });
});
