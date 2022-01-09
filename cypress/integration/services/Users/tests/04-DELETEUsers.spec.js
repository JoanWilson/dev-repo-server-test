import * as DELETEUsers from '../requests/DELETEUsers.request';
import * as GETUsers from '../requests/GETUsers.request';

describe('DELETE Users', () => {
    it('Deletar um usuário', () => {
        GETUsers.allUsers().then(resAllUsers => {
            DELETEUsers.deleteUser(resAllUsers.body[0]._id).should(resDeleteUser => {
                expect(resDeleteUser.status).to.eq(200);
            })
        })
    });
})
