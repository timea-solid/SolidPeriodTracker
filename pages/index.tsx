import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useSession } from "@inrupt/solid-ui-react";
import { performLogin } from '../utils';
import Navbar from '../components/navbar';
const Home: NextPage = () => {
  const { session } = useSession();

  return (
    <div className={styles.firstPage}>
      <Image src="/images/blood.png" height={240} width={240} /> 
      <h1>Hello! I'm your period tracker</h1>
      <span>Let me tell you when to expect your period.</span>
      <span>And over time I can make statistics for you.</span>
      <br/>
      <button id={styles.loginButton} type="button" onClick={() => performLogin('https://jonwilson.solidcommunity.net')}>Login with Solid</button>
      <br/>

      <span className="registration">If you do not have a Solid account:</span>
      <a className="registration" href="https://solidproject.org/users/get-a-pod" target="_blank"> Get one</a>

      <script src="./logic/utils.js"></script>
      <script src="./logic/userData.js"></script>
      <script src="./logic/authentication.js"></script>
      <script src="./logic/workingWithSolidPod.js"></script>
    </div>
  )
}

export default Home
