const familyTree = require('./family-tree')
describe('Family Tree', function () {
    test ('I am in my family tree', function (){
        const me= familyTree[0]
        expect(me.name).toEqual('Yuna')
    })

    test('My brother is also there', function() {
        const brother = familyTree[1]
        expect(brother.name).toEqual("Jay")
    })

    test('My mum is in the tree', function() {
        const mum = familyTree[0].parents[0]
        expect(mum.name).toEqual("Young")
    })

    test('My dad is also there', function(){
        const dad = familyTree[0].parents[1]
        expect(dad.name).toEqual("Soo")
    })

    test('My gran_dad is in the tree', function(){
        const gran_dad = familyTree[0].parents[1].parents[0]
        expect(gran_dad.name).toEqual("Song")
    })

    test('My gran_mum is also there', function(){
        const gran_mum = familyTree[0].parents[0].parents[0]
        expect(gran_mum.name).toEqual("Okja")
    })
})

