
let tmp = 0;

beforeAll( () => {
    tmp = 1;
});

it("waits for asynchronous code", ( done ) => {
    setTimeout(() => {
        expect(tmp).toBe(1);
        tmp = 5;
        done();
    }, 2000);
});

it("waits for asynchronous code", ( done ) => {
    setTimeout(() => {
        expect(tmp).toBe(5);
        expect(2+5).toBe(7);
        tmp = 8;
        done();
    }, 500);
});

it("waits for asynchronous code", ( done ) => {
    expect(tmp).toBe(8);
    done();
});


