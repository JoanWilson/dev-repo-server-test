import * as GETUsers from '../requests/GETUsers.request';

describe('GET Users', () => {
    it('Listar todos os usuários', () => {
        GETUsers.allUsers().should(res => {
            expect(res.status).to.eq(200);
            expect(res.body).to.be.not.null;
            
        })
    });
})
