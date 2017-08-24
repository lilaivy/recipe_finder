import request from 'superagent';

export default {

    getLists: (searchQuery) => {
        return (
            request
                .get(`http://www.recipepuppy.com/api/?q=${searchQuery}`)
                .set('Content-Type', 'application/json')
                .then(res => JSON.parse(res.text) )
                .then (console.log('searchQuery', searchQuery))
        );
    }
}