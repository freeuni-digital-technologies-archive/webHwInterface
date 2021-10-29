const { expect, assert } = chai

// todo rewrite description
CONFIG.isStep(1) && describe("step 1. Login?? ", () => {
    setTimeout(() => {

    }, 1000)
    it("Name provided", () => {
        const password = document.getElementById('password-input')
            // .querySelector('.password')
        console.log(password)
        console.log('rati')
        expect(true).eql(true)
    })
    it("Password found", () => {
        expect(false).eql(true)
    })
})


CONFIG.isStep(2) && describe("step 2. bla bla bla", () => {
    it("this will fail", () => {
        expect(true).eql(false)
    })
})

