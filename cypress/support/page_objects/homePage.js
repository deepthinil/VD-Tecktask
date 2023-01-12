export class HomePage{

    verifyAllTheImportantElementsAreDisplayed(){
        // location button
        cy.get("[data-cy='exploreLocationButton']").should('be.visible')
        // home link in the navigation
        cy.get("[data-cy='homeLink']").should('be.visible')
        // Location link in the navigation
        cy.get("[data-cy='locationLink']").should('be.visible')
        // Main large image 
        cy.get(".jumbotron-fluid").should('be.visible')
        // Featured location title
        cy.get("[data-cy='featuredLocationTitle']").should('be.visible')
        // learn more buttons are displayed under featured location 
        cy.get("[data-cy='learnMoreLocationLink']").should('have.length', 4)
    }

    navigatesToLocationDetailsPageOf(locationName){
        cy.visit(`/locations/${locationName}/`)
    }

    navigatesToLocationsPage(){
        cy.get("[data-cy='locationLink']")
          .click()
    }

}

export const onHomePage = new HomePage()