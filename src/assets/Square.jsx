import React, { useState } from 'react'

export const Square = () => {

    const [snacks, giveSnack] = useState(0);
    const [idiot, addIdiot] = useState([]);

  return (
    <div className="square">
        <h1>You're currently logged in.</h1>
        <p>You have {snacks} snacks.</p>
        <button onClick={() => giveSnack(snacks+1)}>Gimme a snack</button>
        <button onClick={() => addIdiot([...idiot, "idiot"])}>Add an idiot</button>
        <h1 style={{fontSize: '60px', wordWrap: 'wrap'}}>{idiot}</h1>
    </div>
  )
}
