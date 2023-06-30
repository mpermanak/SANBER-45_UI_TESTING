describe('TC_Kategori_Positive', ()=>{
    it('Get commands querying',() => {
        cy.visit('https://kasirdemo.belajarqa.com')

        cy.get('#email')
            .type('nana72@ymail.com')
            .should('have.value','nana72@ymail.com')

        cy.get('#password')
            .type('123adsfadq@')

        cy.get('#root > div > div > div > div.css-1w7v3tn > div > button').click()
       
        cy.wait(2000)

        cy.get('[href="/categories"] > .css-ewi1jp').click()

        cy.wait(2000)

        cy.get('.css-1piskbq').click()

        cy.get('#nama')
            .type('Motor')

        cy.get('#deskripsi')
            .type('Honda')

        cy.get('.chakra-button').click()


        
    })
})