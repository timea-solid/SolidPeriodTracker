import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image';
import { performLogin } from '../utils';
import LoginIcon from '@mui/icons-material/Login';
import { Button, Container, Typography } from '@mui/material';
import { handleIncomingRedirect, login, fetch, getDefaultSession } from '@inrupt/solid-client-authn-browser'
import { getPodUrlAll, getSolidDataset, saveSolidDatasetAt } from "@inrupt/solid-client";

const Home: NextPage = () => {
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
        console.log("mypods", mypods);
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
      <Typography align="center" component="div" gutterBottom sx={{ fontWeight: 'medium' }} variant="h2">Hello! I'm your period tracker</Typography>
      <Typography variant="h5" component="div" gutterBottom>Let me tell you when to expect your period.</Typography>
      <Typography variant="h5" component="div" gutterBottom>And over time I can make statistics for you.</Typography>
      {!loggedIn && (
        <>
          <Button endIcon={<LoginIcon />} fullWidth={true} onClick={() => performLogin()} variant="contained">Login with Solid</Button>
          <br />
          <Typography variant="h5" component="div" display="inline" gutterBottom>If you do not have a Solid account:</Typography>
          <a href="https://solidproject.org/users/get-a-pod" target="_blank"> Get one</a>
        </>
        )
      }
      {loggedIn && (
        <>
          <Typography variant="h3" component="div" gutterBottom>You are signed in with WebID:</Typography>
          <Typography variant="h4" component="div" gutterBottom>{session.info?.webId}</Typography>
        </>
      )}
    </Container>
  )
}

export default Home
