import React from 'react';
import { useSession } from '@inrupt/solid-ui-react';

function Navbar() {
  const { session } = useSession();

  return (
    <div style={{ backgroundColor: 'blue', height: '40px' }}>
      {!session.info.isLoggedIn && (
        <button
          className="btn btn-primary"
          type="button"
          onClick={() =>
            session.login({
              oidcIssuer: 'https://login.inrupt.com/',
              clientName: 'Solid Period Tracker'
            })
          }
        >
          Log In
        </button>
      )}

      {session.info.isLoggedIn && (
        <>
          <p>Logged in as {session.info.webId}</p>

          <button
            className="btn btn-primary"
            type="button"
            onClick={() => session.logout()}
          >
            Log Out
          </button>
        </>
      )}
    </div>
  );
}

export default Navbar;
