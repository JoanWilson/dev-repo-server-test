/// <reference types="cypress" />

const payloadAddUser = require('../payloads/add-user.json');

const addUser = () => {

    return cy.request({
        method: 'Post',
        url: '/users',
        failOnStatusCode: false,
        body: payloadAddUser
    });
}

export { addUser };