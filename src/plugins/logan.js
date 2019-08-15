export default class Logan {

    constructor() {
    }

    login (username, password,imageCode) {
        let data = {
            username: username,
            password: password,
            imageCode:imageCode
        }

        return fetch('/api/Api/nrsc/signIn', {
            body: Logan.formData(data),
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            },
            method: 'POST',
            mode: 'same-origin'
        }).then(response => response.json())
    }

    static formData (details) {
        let formBody = []
        for (let property in details) {
            let encodedKey = encodeURIComponent(property)
            let encodedValue = encodeURIComponent(details[property])
            formBody.push(encodedKey + '=' + encodedValue)
        }
        formBody = formBody.join('&')
        return formBody
    }

    logout () {
        fetch('/logout', {
            headers: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            method: 'get',
            mode: 'same-origin'
        })
    }
}