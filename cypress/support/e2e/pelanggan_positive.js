describe('TC_Pelanggan_Positive', ()=>{
    it('Get commands querying',() => {
        cy.visit('https://kasirdemo.belajarqa.com')

        cy.get('#email')
            .type('nana72@ymail.com')
            .should('have.value','nana72@ymail.com')

        cy.get('#password')
            .type('123adsfadq@')

        cy.get('#root > div > div > div > div.css-1w7v3tn > div > button').click()
       
        cy.wait(2000)

        cy.get(':nth-child(9) > .css-ewi1jp').click()

        cy.wait(2000)

        cy.get('.css-1piskbq').click()

        cy.get('#nama')
            .type('ANDI')

        cy.get('#no\\.hp')
            .type('0851234567802')
            
        cy.get('#alamat')
            .type('Jl. Baru No. 1')

        cy.get('#keterangan')
            .type('UI testing sanber 45')  
           

        cy.get('.chakra-button').click()

    })
})