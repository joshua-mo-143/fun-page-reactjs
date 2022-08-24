import React, {useState, useMemo} from 'react'
import { About } from './About'
import { Home } from './Home'
import {Routes, Route} from 'react-router-dom'
import { userContext } from '../userContext'

export const AllRoutes = () => {

    const [user, setUser] = useState(null)

    // this variable forces child context values to only change if original value has been changed
    const providerValue = useMemo(() => ({user, setUser}), [user, setUser]);

  return (
    <userContext.Provider value={{user, setUser}}>
    <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
    </Routes>
    </userContext.Provider>
  )
}
