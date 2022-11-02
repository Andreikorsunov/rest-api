import * as api from 'api.js';

export async function post(req, res){
    api.del('sessions', req.sessions.token).then(response =>{
        delete req.session.token;
        res.end(JSON.stringify(response));
    })
}