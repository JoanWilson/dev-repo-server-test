/// <reference types="cypress" />

const allUsers = () => {

    return cy.request({
        method: 'GET',
        url: '/users',
        failOnStatusCode: false
    });
}

export { allUsers };