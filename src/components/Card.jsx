import React from 'react'
import '../styles/index.css'
import swal from 'sweetalert';
import Logo2 from '../image/icon-star.svg'
import { Link} from 'react-router-dom';


const Card = ({state, setState}) => {

const buttonClic = () => {
  swal("Ok!", "Gracias por tu opinión", "success")
}
const handleClic = (e) => {
  setState(e.target.value); 
}

  return (
    <>
<div className='contenedor-card'>
<div className='card'>
 <div className='image'>
    <img src={Logo2} alt="logoStar" />
 </div>

<div className='texto'>
  <h3 className='h3'>How did we do?</h3>
  <p className='parrafo'> Please let us know we did with you support request. All feedback is appreciated
    to help us improve our offering! </p>
</div>  
<div className='contenedor-numbers'>
  <button type="button" className='boton' value={1} onClick={handleClic}>1</button>
  <button type="button" className='boton' value={2} onClick={handleClic}>2</button>   
  <button type="button" className='boton' value={3} onClick={handleClic}>3</button>
  <button type="button" className='boton' value={4} onClick={handleClic}>4</button>
  <button type="button" className='boton' value={5} onClick={handleClic}>5</button>
</div>

<Link to='/cardtwo'>
  <button type='submit' className='button' onClick={buttonClic}>Submit</button>
</Link>
</div>  
</div>
</> 

  )
}

export default Card