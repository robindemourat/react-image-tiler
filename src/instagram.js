import fetchJsonp from 'fetch-jsonp'

export default class InstagramFeed {
    constructor(userId, clientId) {
        self.userId = userId
        self.clientId = clientId
    }

    recent(size) {
        const url = `https://api.instagram.com/v1/users/${self.userId}/media/recent/?client_id=${self.clientId}`

        return fetchJsonp(url, {method: 'GET'})
            .then(function(response) {
                return response.json()
            })
            .then(function(json) {
                return json
            })
    }
}
