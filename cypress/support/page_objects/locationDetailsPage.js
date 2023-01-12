
export class LocationDetailsPage{

    verifyLocationImageIsRendered(){
     cy.get('[data-cy="locationDetailsImage"]')
       .should('be.visible')
       .and(($img) => {
     expect($img[0].naturalWidth).to.be.greaterThan(0)
    })
    }

    verifyParkingIsIncluded(){
        cy.get('[data-cy="locationDetailRow-fa-car"]').should('be.visible').find('[data-cy="successTick"]').should('be.visible')        
    }

    verifyOfficeRoomExistsWithGivenNoOfSeats(noOfSeats){
        const list = []
        cy.get('[data-cy="officeSeats"]').each(($item) => {
            list.push($item.text());
        })
            .wrap(list)
             .should('deep.include', noOfSeats)
    }

    verifyPublicAccessIsAvailable(){
        cy.get('[data-cy="locationDetailRow-fa-building"]').should('be.visible').find('[data-cy="successTick"]').should('be.visible')
    }
}

export const onLocationDetailsPage = new LocationDetailsPage()