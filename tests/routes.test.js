const request = require( 'supertest' );
const app = require( '../app' );

describe( 'Test the about-page path', () => {
    test( 'It should respond with a 200 message', () => {
        return request( app ).get('/about-page').then( response => {
            expect( response.statusCode ).toBe( 200 );
        });
    });
});

describe( 'Test the jobs path', () => {
    test( 'It should respond with 200 message', () => {
        return request( app ).get('/jobs').then( response => {
            expect( response.statusCode ).toBe( 200 );
        });
    });
});

describe( 'Test the valves path', () => {
    test( 'It should respond with 200 message', () => {
        return request( app ).get('/valves').then( response => {
            expect( response.statusCode ).toBe( 200 );
        });
    });
});

describe( 'Test invalid path => 1', () => {
    test( 'It should respond with 404 message', () => {
        return request( app ).get('/widgets').then( response => {
            expect( response.statusCode ).toBe( 404 );
        });
    });
});

describe( 'Test invalid path => 2', () => {
    test( 'It should respond with 404 message', () => {
        return request( app ).get('/acme').then( response => {
            expect( response.statusCode ).toBe( 404 );
        });
    });
});
