describe('UserCtrl', () => {
    describe('unit', () => {
        it('checks if true is really true', function () {
            expect.assertions(1);
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve();
                }, 1000)
            }).then(() => {
                expect(true).toBeTruthy();
            });
        });
    });

    describe('DOM', () => {
        it('checks if false is really false', function () {
            expect(false).toBeFalsy();
        });
    });
});





