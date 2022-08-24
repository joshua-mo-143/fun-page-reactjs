import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import { userContext } from '../userContext';
import { Square } from '../assets/square';

export const About = () => {

    const {user, setUser} = useContext(userContext);
    
  return (
    <>
    <Link to="/">Go to home page</Link>
    {user ? <Square/> : null}

    </>
  )
}
