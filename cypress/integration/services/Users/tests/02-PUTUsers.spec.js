import * as PUTUsers from '../requests/PUTUsers.request';
import * as GETUsers from '../requests/GETUsers.request';

describe('PUT Users', () => {
    it('Mudança dos dados de um usuário', () => {
        GETUsers.allUsers().then(resAllUsers => {
            PUTUsers.updateUser(resAllUsers.body[0]._id).should(resUpdateUser => {
                expect(resUpdateUser.status).to.eq(200);
                expect(resUpdateUser.body).to.be.not.null;
                cy.log(resUpdateUser.body)
                expect(resUpdateUser.body.email).to.eq('testemudado@cypress.com');
            })
        })
    });
})
