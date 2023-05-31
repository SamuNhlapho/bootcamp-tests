describe('Test greet function' , function(){
    it('It should return "Hello, Musa" when called with "Musa"' , function(){
        assert.equal("Hello, Musa",greet('Musa'), 'Hello, Musa');
    });
    
    it('It should return "Hello, Lulu" when called with "Lulu"' , function(){
        assert.equal("Hello, Lulu",greet('Lulu'), 'Hello, Lulu');
    });

});