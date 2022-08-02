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