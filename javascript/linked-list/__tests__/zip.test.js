'use strict'

const {linkedList, linkedList2} = require("../index");

describe('zip two linked lists test',()=>{
    it('zipLists function test', ()=>{
        const firstLest = linkedList;
        const secondLest = linkedList2;

        firstLest.append(1);
        firstLest.append(3);
        firstLest.append(5);

        secondLest.append(2);
        secondLest.append(4);
        secondLest.append(6);
        console.log(firstLest, secondLest);
        expect(typeof linkedList.zipLists(firstLest, secondLest)).toBe('object')
        console.log(linkedList.zipLists(firstLest, secondLest));
    })
})