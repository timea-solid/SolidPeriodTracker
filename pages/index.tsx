import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { performLogin, performLogout } from '../utils';
import LoginIcon from '@mui/icons-material/Login';
import { Button, Container, Typography } from '@mui/material';
import { handleIncomingRedirect, login, fetch, getDefaultSession } from '@inrupt/solid-client-authn-browser'
import { createContainerAt, createSolidDataset, getPodUrlAll, getSolidDataset, saveSolidDatasetAt } from "@inrupt/solid-client";

const Home: NextPage = () => {
  let [loggedIn, setLoggedIn] = useState(false)
  const session = getDefaultSession()
  const router = useRouter()

  async function checkLogin() {
    await handleIncomingRedirect({ restorePreviousSession: true }).then((info) => {
      console.log(`Logged in with WebID ${info?.webId}`)
    })
    if(session.info.isLoggedIn) {
      setLoggedIn(true)
      if(typeof session.info.webId === "string") {
        //at this step I would like to check if the Pod user has a container called 'periodTracker' and only if not prompt them to register meaning -> create a container and ask some basic period related questions which every app does. And save those infos as settings in their pod. 
        //I had in mind to redirect the user to the refistrationIntro.html page for all this.
        //after registration and/or login of an already registered user - redirect them to the dashboard page where they see the current month as a calendar and teh next month. And other buttons for options...
        const mypods = await getPodUrlAll(session.info.webId, { fetch: fetch })
        const dataset = await getSolidDataset(mypods[0], { fetch: fetch })

        let containerUrls: string[] = []
        let newUrls: string[] = []
        let containerNames: string[] =[]
        let i;
        for (i in dataset.graphs.default) {
            if (dataset.graphs.default.hasOwnProperty(i)) {
                containerUrls.push(i)
            }
        }
        containerUrls.splice(0,3)
        containerUrls.forEach((str) => {
          const len = str.length
          const lastSlash = str.lastIndexOf("/")
          if((len - 1) === lastSlash) {
            let newUrl = str.slice(0, lastSlash)
            newUrls.push(newUrl)
          }
        })
        newUrls.forEach((str) => {
          let lastSlash = str.lastIndexOf("/")
          let containerName = str.slice(lastSlash + 1)
          containerNames.push(containerName)
        })
        console.log("Containers", containerNames)
        if(containerNames.includes('periodTracker')) {
          router.push('/registrationIntro')
        }
      }
    }
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
          <Typography variant="h4" component="div" gutterBottom>{session?.info?.webId}</Typography>
          <Button endIcon={<LoginIcon />} fullWidth={true} onClick={() => performLogout()} variant="contained">Logout</Button>
        </>
      )}
    </Container>
  )
}

export default Home
