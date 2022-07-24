import { useSession } from '@inrupt/solid-ui-react';
import { useState, useEffect } from 'react';
import { fetchUserProfile, findUserStorage, readSolidDocument } from '../hooks/utils';
import { IPersonProfileData } from '../Interface';



const useProfile = (webId: string): IPersonProfileData|null => {
  const [profile, setProfile] = useState<IPersonProfileData|null>(null);
  const [error, setError] = useState(null);
  const { session } = useSession();


  useEffect( () => {
  
    if (session.info.isLoggedIn) {
      const data =  fetchUserProfile(webId); // TODO why await giving issues here
      setProfile(data);
    }
  }, [session, session.info.isLoggedIn]);
  return { profile };
};
export default useProfile;
