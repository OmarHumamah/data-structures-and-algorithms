'use strict';

const balanced = require('../validBrackets')

describe('balanced bracket test', ()=>{
    it('Check balanced strings', ()=>{
        let string1 = "{}{Code}[Fellows](())";
        let string2 = "()[[Extra Characters]]";
        let string3 = "(){}[[]]";
        let string4 = "{}(){}";

        expect(balanced(string1)).toBeTruthy();
        expect(balanced(string2)).toBeTruthy();
        expect(balanced(string3)).toBeTruthy();
        expect(balanced(string4)).toBeTruthy();

    })

    it('Check not balanced strings', ()=>{
        let string5 = "{}{Code}][[Fellows](())";
        let string6 = "()[[Extra Characters(])]]";
        let string7 = "(){}[[]";
        let string8 = "{}()}";

        expect(balanced(string5)).toBeFalsy();
        expect(balanced(string6)).toBeFalsy();
        expect(balanced(string7)).toBeFalsy();
        expect(balanced(string8)).toBeFalsy();

    })
})