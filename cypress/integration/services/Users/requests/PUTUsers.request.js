/// <reference types="cypress" />

const payloadUpdateUser = require('../payloads/put-user.json');

const updateUser = (idUser) => {

    return cy.request({
        method: 'PUT',
        url: `/users/${idUser}`,
        failOnStatusCode: false,
        body: payloadUpdateUser
    });
}

export { updateUser };