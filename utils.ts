import { IPersonProfileData } from "./Interface";
import { handleIncomingRedirect, login, fetch, getDefaultSession } from '@inrupt/solid-client-authn-browser'


export function isSuccessfulStatusCode(statusCode:number) {
  return Math.floor(statusCode / 100) === 2;
}

export async function createSolidContainer(url:string, name:string) {
  console.log('WE are creatign container for the app');
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'text/turtle',
      Link: '<http://www.w3.org/ns/ldp#BasicContainer>; rel="type"',
      Slug: name
    }
  });

  console.log(response);
  if (!isSuccessfulStatusCode(response.status))
    throw new Error(
      `Failed creating container at ${url}, returned status code ${response.status}`
    );
}



// export async function readSolidDocument(url:string | string) {
//   try {
//     const response = await fetch(url, {
//       headers: { Accept: 'text/turtle' }
//     });

//     if (!isSuccessfulStatusCode(response.status)) return null;

//     const data = await response.text();
//     console.log(data);
//     const parser = new N3.Parser({ baseIRI: url });

//     return parser.parse(data);
//   } catch (error) {
//     return null;
//   }
// }

// export async function findUserStorage(url:string) :Promise<string>{
//   url = url.replace(/#.*$/, '');
//   url = url.endsWith('/') ? url + '../' : url + '/../';
//   // url = new URL(url);

//   const response = await fetch(url.href);

//   if (
//     response.headers.get(
//       'Link'?.includes('<http://www.w3.org/ns/pim/space#storage>; rel="type"')
//     )
//   )
//     return url.href;

//   if (url.pathname === '/') return url.href;

//   return findUserStorage(url.href);
// }

export function performLogin(loginURLhref:string) {
    login({
        oidcIssuer: loginURLhref,
        redirectUrl: window.location.href,
        clientName: 'Solid Period Tracker'
    })
}

// export async function performLogout() {
//     await logout();
// }

// export const fetchUserProfile = async (
//     webId: string
//   ): Promise<IPersonProfileData> => {
//     const profileQuads = await readSolidDocument(webId);
//     const userName = profileQuads.find(
//       (quad) => quad.predicate.value === 'http://xmlns.com/foaf/0.1/name'
//     );
//     const userStorage = profileQuads.find(
//       (quad) =>
//         quad.predicate.value === 'http://www.w3.org/ns/pim/space#storage'
//     );
//     return {
//       webId: webId,
//       name: userName?.object.value || 'Anonymous',
//       storageUrl: userStorage?.object.value || (await findUserStorage(webId)),
//       error
//     };
//   };