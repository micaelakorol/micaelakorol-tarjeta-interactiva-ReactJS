import React from 'react'
import '../styles/card-two.css'
import Logo from '../image/Logo.svg'
import { Link } from 'react-router-dom'
const CardTwo = ({state, setState}) => {

  return (
    <> 

<div className='contenedor'>
<div className='cards'>
<div className='image'>
   <img src={Logo} alt="logo" />
</div>

<div className='dinamico'>
  <p>Good!</p>
</div>
 
<div className='contenedor-dos'>
  <h2>Tranks You!</h2>
  <p> We appreciate you taking the time to give a rating. If you ever need more support,
don’t hesitate to get in touch!</p>
<div className='link'>
  <Link to='/card'> ← </Link>
</div>
</div> 
</div>
</div>
</>
  )
}

export default CardTwo