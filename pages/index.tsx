import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image';
import { useSession } from "@inrupt/solid-ui-react";
import { performLogin } from '../utils';
import Navbar from '../components/navbar';
import Button from '@mui/material/Button'
import LoginIcon from '@mui/icons-material/Login';
import Typography from '@mui/material/Typography';

const Home: NextPage = () => {
  const { session } = useSession();

  return (
    <div>
      <Image src="/images/blood.png" height={240} width={240} /> 
      <Typography align="center" variant="h2" component="div" gutterBottom>Hello! I'm your period tracker</Typography>
      <Typography variant="h5" component="div" gutterBottom>Let me tell you when to expect your period.</Typography>
      <Typography variant="h5" component="div" gutterBottom>And over time I can make statistics for you.</Typography>
      <Button endIcon={<LoginIcon />} onClick={() => performLogin()} variant="contained">Login with Solid</Button>
      <br />
      <Typography variant="h5" component="div" display="inline" gutterBottom>If you do not have a Solid account:</Typography>
      <a href="https://solidproject.org/users/get-a-pod" target="_blank"> Get one</a>
    </div>
  )
}

export default Home
