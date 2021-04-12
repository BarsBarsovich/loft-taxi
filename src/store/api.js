export async function sendRequestToLogin(email, password){
    const url = `https://loft-taxi.glitch.me/auth?username=${email}&password=${password}`;
    return fetch(url).then(res=> res.json()).then(data => data.success);
}


export async function sendRequestToRoutes(){
    const url = 'https://loft-taxi.glitch.me/addressList';
    return fetch(url).then(res=> res.json()).then(data => data.addresses);
}
