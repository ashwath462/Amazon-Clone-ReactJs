import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';
import './subtotal.css'


function Subtotal() {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value)=>(
                <>
                    <p>
                        Subtotal ({basket.length} items):
                        {/* <strong>{`${value}`}</strong> */}
                        <strong>{value}</strong>
                    </p>
                    <small className='subtotal__gift'>
                        <input type="checkbox"/> This order contains a gift   
                    </small>
                </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}   //renderText mai yahi value pass ki hai
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

            <button>Proceed to checkout</button>
        </div>
    )
}


export default Subtotal
