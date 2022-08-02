async function createSolidContainer(url, name) {
    console.log("WE are creatign container for the app");
    const response = await solidClientAuthentication.fetch(url, {
        method: 'POST',
        header:
        {   
            'Content-Type': 'text/turtle',
            'Link': '<http://www.w3.org/ns/ldp#BasicContainer>; rel="type"',
            'Slug': name
        }    
    });

    console.log(response);
    if (!isSuccessfulStatusCode(response.status))
        throw new Error(`Failed creating container at ${url}, returned status code ${response.status}`);
}

async function fetchUserProfile(webId) {
    const profileQuads = await readSolidDocument(webId);
    const userName = profileQuads.find(quad => quad.predicate.value === 'http://xmlns.com/foaf/0.1/name');
    const userStorage = profileQuads.find(quad => quad.predicate.value === 'http://www.w3.org/ns/pim/space#storage');

    return {
        webId: webId,
        name: userName?.object.value || 'Anonymous',
        storageUrl: userStorage?.object.value || await findUserStorage(webId)
    };
}

async function readSolidDocument(url) {
    try {
        const response = await solidClientAuthentication.fetch(url, {header: {Accept: 'text/turtle'}});

        if (!isSuccessfulStatusCode(response.status))
            return null;

        const data = await response.text();
        console.log(data);
        const parser = new N3.Parser({ baseIRI: url});

        return parser.parse(data);
    } catch (error) {
        return null;
    }
}

async function findUserStorage(url) {
    url = url.replace(/#.*$/,'');
    url = url.endsWith('/') ? url + '../' : url + '/../';
    url = new URL(url);

    const response = await solidClientAuthentication.fetch(url.href);

    if (response.header.get('Link'?.includes('<http://www.w3.org/ns/pim/space#storage>; rel="type"')))
        return url.href;

    if (url.pathname === '/')
        return url.href;

    return findUserStorage(url.href);
}