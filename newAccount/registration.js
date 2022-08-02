let user, periodAppContainerUrl;

function welcome() {
    user = JSON.parse(localStorage.getItem('user'));
    document.getElementById('username').textContent = user.name;
    console.log(user.name);
}

async function logout() {
    await performLogout();
    localStorage.clear();
    window.location.assign("../index.html");
}

async function registerNewUser() {
    let periodStart = document.getElementById('periodStart');
    let periodEnd = document.getElementById('periodEnd');

    let periodEntry = {
        periodStart: periodStart,
        periodEnd: periodEnd
    }

    await initializeAppDataOnPod(user, periodEntry);

    windows.location.assign('../accountData/dashboard.html');
}

async function initializeAppDataOnPod(user, periodEntry) {

    if (!periodAppContainerUrl) {
        await createSolidContainer(user.storageUrl, 'periodTracker');

        periodAppContainerUrl = `${user.storageUrl}periodTracker/`;
    }

    const documentUrl = await createSolidDocument(periodAppContainerUrl, `
        @prefix schema: <https://imysoft.com/periodTracker/entry/> .
        <#periodEntry>
            a schema:PeriodEntry ;
            schema:startDate "${escapetext(periodEntry.periodStart)}" ;
            schema:endDate "${escapetext(periodEntry.periodEnd)}" .
    `);

    const taskUrl = `${documentUrl}#periodEntry`;
}

welcome();