import { useState } from 'react'
import PropTypes from 'prop-types'

export const CounterApp = ({value}) =>{

    const [counter, setCounter] = useState(value) // Cuando se cambia un hook, se vuelve a renderizar todo el functional component en el cual estaba incluido
    const handleAdd = () => {
    //console.log(event)
    //setCounter(counter + 1);
    setCounter((c) => c + 1 ); //Toma el valor actual del counter, sin saber que es el counter y le suma 1
    }

    const handleRes = () => setCounter(counter - 1)
    

    const handleReset = () => setCounter(value)

    return (
        <>
        <h1>CounterApp</h1>
        <h2> { counter } </h2>

        <button onClick={ handleAdd }> +1 </button>
        <button onClick={ handleRes }> -1 </button>
        <button aria-label='btn-reset' onClick={ handleReset}> Reset </button>
        </>
    )
}

CounterApp.propTypesropTypes= {
    value: PropTypes.number.isRequired
}