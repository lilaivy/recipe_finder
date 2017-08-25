import request from 'superagent';

export default {

    getLists: (searchQuery) => {
        return (
            request
                .get('?q=omelet')
                .set('Content-Type', 'application/json')
                .then(res => JSON.parse(res.text) )
        );
    }
}