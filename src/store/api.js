export async function sendRequestToLogin(email, password){
    const url = `https://loft-taxi.glitch.me/auth?username=${email}&password=${password}`;
    return fetch(url).then(res=> res.json()).then(data => data.success);
}

export async function sendRequestToLoginPost(){
    const user = {
        email: 'test@test.com',
        password: '123123'
    }
    const url = `https://loft-taxi.glitch.me/auth`;
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
    }).then(res=> res.json()).then(data => data.success);

}


export async function sendRequestToRoutes() {
    const url = 'https://loft-taxi.glitch.me/addressList';
    return fetch(url).then(res => res.json()).then(data => data.addresses);
}
