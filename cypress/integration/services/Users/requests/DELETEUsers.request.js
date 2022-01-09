/// <reference types="cypress" />

const deleteUser = (idUser) => {

    return cy.request({
        method: 'DELETE',
        url: `/users/${idUser}`,
        failOnStatusCode: false
    });
}

export { deleteUser };