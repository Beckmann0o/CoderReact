import { CarritoContext } from "../context/CarritoContext";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CartItem from "../CartItem/CartItem";
import React from 'react'

export const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);
    return (
        <div>
            {carrito.map(product => (
                <CartItem
                    key={product.item.id}
                    nombre={product.item.nombre}
                    precio={product.item.precio}
                    cantidad={product.cantidad}
                    idEliminado={product.item.id}
                />
            ))}

            <h3>Total: ${total} </h3>
            <h3>Cantidad total: {cantidadTotal} </h3>
            <button onClick={() => vaciarCarrito()}> Vaciar carrito </button>
            -
            <Link to='/'> Seguir Comprando </Link>
            -
            <Link to='/checkout'> Finalizar Compra </Link>
        </div>
    )
}

export default Cart