describe('TC_Login_Positive', ()=>{
    it('Get commands querying',() => {
        cy.visit('https://kasirdemo.belajarqa.com/')

        cy.get('#email')
            .type('nana72@ymail.com')
            .should('have.value','nana72@ymail.com')

        cy.get('#password')
            .type('123adsfadq@')

        cy.get('#root > div > div > div > div.css-1w7v3tn > div > button').click()

        
    })
})