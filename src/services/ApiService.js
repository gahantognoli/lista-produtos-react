const api = 'http://localhost:3002/api/lista-produtos/';

export const ApiService = {
    get(endpoint){
        return fetch(`${api}${endpoint}`)
            .then(reponse => reponse.json());
    },
    post(endpoint, data){
        return fetch(`${api}${endpoint}`, {
            method: 'post',
            body: JSON.stringify(data),
        })
        .then(response => response.json())
    },
    delete(endpoint, id){
        return fetch(`${api}${endpoint}?id=${id}`, {
            method: 'delete'
        })
        .then(response => response.json());
    }
};