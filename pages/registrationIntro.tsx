import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import Image from 'next/image';
import { performLogout } from '../utils';
import { Container, Typography } from '@mui/material';
import { handleIncomingRedirect, fetch, getDefaultSession } from '@inrupt/solid-client-authn-browser'
import { createContainerAt, createSolidDataset, getPodUrlAll, getSolidDataset, saveSolidDatasetAt } from "@inrupt/solid-client";

const Registration: NextPage = () => {
  let [loggedIn, setLoggedIn] = useState(false);
  const session = getDefaultSession();

  async function checkLogin() {
    await handleIncomingRedirect({ restorePreviousSession: true }).then((info) => {
      console.log(`Logged in with WebID ${info?.webId}`);
    })
    if(session.info.isLoggedIn) {
      setLoggedIn(true);
      if(typeof session.info.webId === "string") {
        const mypods = await getPodUrlAll(session.info.webId, { fetch: fetch });
        const dataset = await getSolidDataset(mypods[0], { fetch: fetch })
        console.log("Containers", dataset.graphs.default)
      }
    }
    console.log("Checked login, SESSION IS");
    console.log(session.info);
  }

  useEffect(() => {
    checkLogin();
  }, []);


  return (
    <Container maxWidth="md" sx={{ marginTop: '20px' }}>
      <Image src="/images/blood.png" height={240} width={240} /> 
      <Typography variant="h1" component="div" gutterBottom>Registration Page</Typography>
      <Typography variant="h3" component="div" gutterBottom>You are signed in with WebID:</Typography>
      <Typography variant="h4" component="div" gutterBottom>{session?.info?.webId}</Typography> 
    </Container>
  )
}

export default Registration
