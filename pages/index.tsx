import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image';
import { useSession } from "@inrupt/solid-ui-react";
import { performLogin } from '../utils';
import Navbar from '../components/navbar';
import Button from '@mui/material/Button'
import LoginIcon from '@mui/icons-material/Login';
const Home: NextPage = () => {
  const { session } = useSession();

  return (
    <div>
      <Image src="/images/blood.png" height={240} width={240} /> 
      <h1>Hello! I'm your period tracker</h1>
      <span>Let me tell you when to expect your period.</span>
      <span>And over time I can make statistics for you.</span>
      <br/>
      <Button endIcon={<LoginIcon />} onClick={() => performLogin('https://jonwilson.solidcommunity.net')} variant="contained">Login with Solid</Button>
      <br/>

      <span className="registration">If you do not have a Solid account:</span>
      <a className="registration" href="https://solidproject.org/users/get-a-pod" target="_blank"> Get one</a>
    </div>
  )
}

export default Home
