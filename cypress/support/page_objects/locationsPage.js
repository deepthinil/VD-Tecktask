
export class LocationsPage{

    verifyImageIsExistForAllTheLocations(){
        cy.get('[data-cy="locationCard"]').find('img')
            .should(($imgs) => $imgs.map((i, /** @type {HTMLImageElement} */ img) => expect(img.naturalWidth).to.be.greaterThan(0)));
    }

}

export const onLocationsPage = new LocationsPage()