const { syncDB } = require("../../tasks/syncDB")

describe('Test syncDb', () => {

    test('should be execute two times', () => {
        syncDB();
        const times = syncDB();

        console.log('TIMES', times);
        expect(times).toBe(2);
    })

})