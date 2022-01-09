import * as POSTUsers from '../requests/POSTUsers.request';

context('POST Users', () => {
    it('Adicionar um novo usuário', () => {
        POSTUsers.addUser().should( res => {
            expect(res.status).to.eq(201);
            expect(res.body.email).to.eq('teste@cypress.com');
        })
    });
})
