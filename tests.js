const { expect, assert } = chai

CONFIG.isStep(1) && describe("step 1. bla bla ", () => {
    it("this will pass", () => {
        expect(true).eql(true)
    })
    it("this will fail", () => {
        expect(false).eql(true)
    })
})


CONFIG.isStep(2) && describe("step 2. bla bla bla", () => {
    it("this will fail", () => {
        expect(true).eql(false)
    })
})

