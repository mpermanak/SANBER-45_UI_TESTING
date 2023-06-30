describe('TC_Login_Positive', ()=>{
    it('Get commands querying',() => {
        cy.visit('https://kasirdemo.belajarqa.com/')

        cy.get('#email')
            .type('test@ymail.com')
            
        cy.get('#password')
            .type('112233a@')

        cy.get('#root > div > div > div > div.css-1w7v3tn > div > button').click()

        cy.get('.chakra-alert')
            .should('have.text', 'Kredensial yang Anda berikan salah')

        
    })
})