/// <reference types="cypress" />

import { onHomePage } from "../support/page_objects/homePage"
import { onLocationDetailsPage } from "../support/page_objects/locationDetailsPage" 
import { onLocationsPage } from "../support/page_objects/locationsPage" 


context('homepage tests', () => {
    beforeEach(() => {
      cy.visit('/')
    })
    
    it('Check home page is loaded successfully', () => {
        onHomePage.verifyAllTheImportantElementsAreDisplayed()
    })

    it('Check location details page loaded with some test data', () => {
        onHomePage.navigatesToLocationDetailsPageOf('gutkowski-inc-building')
        onLocationDetailsPage.verifyLocationImageIsRendered()
        onLocationDetailsPage.verifyParkingIsIncluded()
        onLocationDetailsPage.verifyOfficeRoomExistsWithGivenNoOfSeats('4')
        onLocationDetailsPage.verifyPublicAccessIsAvailable()
      })
    
      it('Check all existing locations have an image in locations page', () => {
        onHomePage.navigatesToLocationsPage()
        onLocationsPage.verifyImageIsExistForAllTheLocations()
    })
    
})