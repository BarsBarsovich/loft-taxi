export async function sendRequestToLogin(email, password){
    const url = 'https://loft-taxi.glitch.me/auth';
    return fetch(url, {
        method: 'POST',
        headers: {'Content-Type':'application/json;charset=utf-8'},
        body: JSON.stringify({email, password})
    }).then(res => res.json());
}

export async function sendRequestToRoutes() {
    const url = 'https://loft-taxi.glitch.me/addressList';
    return fetch(url).then(res => res.json()).then(data => data.addresses);
}

export async function sendRequestToCoords(from, to){
    const url = `https://loft-taxi.glitch.me/route?address1=${from}&address2=${to}`
    return fetch(url).then(res=> res.json()).then(data => data)
}


export async function sendRequestToFillProfile(cardNumber, expiryDate, cardName, cvc, token){
    const url = 'https://loft-taxi.glitch.me/card';
    return fetch(url, {
        method: 'POST',
        headers: {'Content-Type':'application/json;charset=utf-8'},
        body: JSON.stringify({cardNumber, expiryDate, cardName, cvc, token})
    }).then(res => res.json()).then(data => data.success);
}
