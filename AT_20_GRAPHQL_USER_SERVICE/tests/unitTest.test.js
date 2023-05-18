describe ( 'This is the test suite for the graphQl-user service' , () => {
    it ('Should display a message indicating success', ()=> {
        const message = 'Connected successfully';
        const expMessage = 'Connected successfully';
        expect(message),toBe(expMessage); 
    });
});