export default class APIService {
    // http://127.0.0.1:5328
    // Insert an article
    static recycle(body) {
        return fetch(`https://growthwebsite.vercel.app/api/Recycle`, {
            'method': 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        .then(response => response.json())
        .catch(error => console.log(error))
    }
    static chat(body) {
        return fetch(`https://growthwebsite.vercel.app/api/Chat`, {
            'method': 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        .then(response => response.json())
        .catch(error => console.log(error))
    }

}