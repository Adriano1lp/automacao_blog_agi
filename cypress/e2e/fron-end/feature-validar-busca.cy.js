import elemento from '../../fixtures/selectors/search.json'

describe ('Busca na pagina Home', () => {
    context ('Validar busca na pagina home', () => {
        beforeEach(() => {
            cy.visit('https://blogdoagi.com.br')
        })

        it ('Validar busca por termo existente', () => {            
            cy.get(elemento.bt_search).click()
            cy.get(elemento.input_search).type('Teste')
            cy.get(elemento.bt_submit).click()
            cy.get(elemento.result_true).invoke('text').then((value) => {
                expect(value).to.eq('Teste')
            })       
        })
    
        it ('Validar busca por termo inexistente', () =>{
            cy.get(elemento.bt_search).click()
            cy.get(elemento.input_search).type('ttt')
            cy.get(elemento.bt_submit).click()
            cy.contains('Nenhum resultado')      
        })
    }) 
})