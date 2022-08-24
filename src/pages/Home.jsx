import React , {useContext} from 'react'
import {Link} from 'react-router-dom'
import { Square } from '../assets/square';
import { login } from '../login';
import { userContext } from '../userContext';

export const Home = () => {
    const {user, setUser} = useContext(userContext);

  return (
    <>
    <Link to="/about">Go to About page</Link>

    {user ? <button onClick={() => setUser(null)}>logout</button>
    :
    <button onClick={async () => {
        const user = await login();
        setUser(user);
    }}>Log In</button>
    }

    {user ? <Square/> : null}

    </>
  )
}
