'use strict'

async function main() {
    // user has webId, name, srotageUrl 
    const user = await restoreSession();
    console.log("USER is");
    console.log(user);
    if (user) {
        console.log(user);
        localStorage.setItem("user",  JSON.stringify(user));
    //    if (userAlreadyUserOfApp())
     //       window.location.assign("/accountData/dashboard.html");
     //   else
            window.location.assign("/newAccount/registrationIntro.html");
    }
}

async function restoreSession() {
    try {
        await solidClientAuthentication.handleIncomingRedirect({ restorePreviousSession: true });

        const session = solidClientAuthentication.getDefaultSession();

        console.log("SESSION IS");
        console.log(session.info.isLoggedIn);

        if (!session.info.isLoggedIn) {
           
            return false;
        }

        // user has webId, name, srotageUrl    
        let user = await fetchUserProfile(session.info.webId);

        console.log(user);
        return user;

    } catch (error) {
        alert(error.message);
        return false;
    }
}

function login() {

    const loginURLhref = getLogInURL();

    if (!loginURLhref)
        return null;

    performLogin(loginURLhref);
}

function getLogInURL() {
    const url = prompt("What is your Solid login URL? Example: https://timeasolidweb.solidweb.org/");

    if (!url)
        return null;
    
    const loginURL = new URL(url);
    loginURL.hash = '';
    loginURL.pathname = '';

    return loginURL.href;
}

main();

window.onunhandledrejection = (error) => alert(`Error: ${error.reason?.message}`);
