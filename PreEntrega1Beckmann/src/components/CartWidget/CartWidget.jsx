import React from 'react'
import { BsFillCartFill } from "react-icons/bs";

function CartWidget({numItems}) {
    return (
   <>
        <BsFillCartFill/>
        {numItems}
   </> 
  )
}

export default CartWidget
