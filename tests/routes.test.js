const request = require( 'supertest' );
const app = require( '../app' );

describe( 'Test the about-page path', () => {
    test( 'It should respond to the GET method', () => {
        return request( app ).get('/acme/about-page').then( response => {
            expect( response.statusCode ).toBe( 200 );
        });
    });
});

describe( 'Test the jobs path', () => {
    test( 'It should respond to the GET method', () => {
        return request( app ).get('/acme/jobs').then( response => {
            expect( response.statusCode ).toBe( 200 );
        });
    });
});

describe( 'Test the valves path', () => {
    test( 'It should respond to the GET method', () => {
        return request( app ).get('/acme/valves').then( response => {
            expect( response.statusCode ).toBe( 200 );
        });
    });
});

describe( 'Test invalid path', () => {
    test( 'It should respond with 404 message', () => {
        return request( app ).get('/acme/widgets').then( response => {
            expect( response.statusCode ).toBe( 404 );
        });
    });
});
