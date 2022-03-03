const { TestWatcher } = require("jest")
const {remove_punc}  = require("./main.js")
console.log(remove_punc)

test("sanity test that regular string is unmodified", function(){
    expect(remove_punc("hello world")).toBe("hello world")
})