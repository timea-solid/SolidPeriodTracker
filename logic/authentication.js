function performLogin(loginURLhref) {
    solidClientAuthentication.login({
        oidcIssuer: loginURLhref,
        redirectUrl: window.location.href,
        clientName: 'Solid Period Tracker'
    })
}

async function performLogout() {
    await solidClientAuthentication.logout();
}