import { useContext } from 'react'
import { CarritoContext } from '../context/CarritoContext'
import React from 'react'


const CartItem = ({nombre, cantidad, precio, idEliminado}) => {
    const {eliminarProducto} = useContext(CarritoContext);
    return (
    <>
    <h1>{nombre}</h1>
    <p>Cantidad: {cantidad}</p>
    <p>Precio: $ {precio}</p>
    <button onClick={()=> eliminarProducto(idEliminado)}>Eliminar</button>
    </>
  )
}

export default CartItem