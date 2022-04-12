import React, { useState } from 'react'

import Card from './components/Card'
import './styles/index.css'
const App = () => {
  
const [state,setState] = useState('')
  return (
    <div>
<Card state={state} setState={setState}/>

  </div>
  )
}

export default App