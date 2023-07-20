//import {Fragment} from 'react'
import PropTypes from 'prop-types'
const newMessage = {
  id: '123',
  pass: 'wenaa',
} // Si una coonstante no va a tener dependencia, se recomienda ponerla fuera del functional component, ya que no es necesario que se rerenderize
const Tarea = () => 'Mi nombre es Tarea';


export const FirstApp = ({title,subTitle,name}) => { //Props con desestructuracion

    return (
      <>{/* Esto es igual a un <Fragment>, fue añadido por react para no tener que importar cada vez el fragment */}
      {/* <code>{JSON.stringify(newMessage)}</code> */}
      {/* <h1>{Tarea()}</h1> */}
      <h1>{title}</h1>
      <p>{subTitle}</p>
      <p>{name}</p>
      </>
    )
  }
  
  FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
  }

  FirstApp.defaultProps = { //Entran antes que los propTypes
    //title: 'No hay titulo',
    subTitle: 'No hay subtitulo',
    name: 'Ignacio Alvarado',
  }