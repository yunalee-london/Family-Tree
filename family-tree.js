function childOf() {return this.parents.map(parent=>parent.name)}
const me = {name:"Yuna", parents:[], childOf}
const brother = {name:"Jay", parents:[], childOf}
const mum = {name:"Young", parents:[], childOf}
const dad = {name:"Soo", parents:[], childOf}
const gran_dad = {name:"Song", parents:[], childOf}
const gran_mum = {name:"Okja", parents:[], childOf}
me.parents.push(mum)
me.parents.push(dad)
brother.parents.push(mum)
brother.parents.push(dad)
mum.parents.push(gran_mum)
dad.parents.push(gran_dad)
module.exports = [me, brother, mum, dad, gran_mum, gran_dad]
