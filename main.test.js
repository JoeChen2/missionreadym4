const { TestWatcher } = require("jest")
const {remove_punc}  = require("./main.js")
console.log(remove_punc)

test("sanity test that regular string is unmodified", function(){
    expect(remove_punc("hello world")).toBe("hello world")
})

test("testing non removed puncation", function(){
    expect(remove_punc("hello%world")).toBe("hello%world")
})

test("testing excalmation sign removal", function(){
    expect(remove_punc("!hello world")).toBe("hello world")
})

test("testing question mark removal", function(){
    expect(remove_punc(";hello?world!")).toBe("helloworld")
})

test("testing question mark removal", function(){
    expect(remove_punc("hello world?")).toBe("hello world")
})