import React, {useState} from 'react'
import { GlobalContext } from './Context/GlobalState';

export const TransactionHistroy = () => {
    const { transactions } =useContext(GlobalContext);
    return (
        <div>
            <h3>Transaction Histroy</h3>
            <ul className="list">
                <li className="plus">
                    Today Total Amount
                    <span>$1000</span>
                    <button className="delete-btn">X</button>

                </li>

                <li className="minus">
                    Today Transaction 
                    <span>-$100</span>
                    <button className="delete-btn">X</button>

                </li>





            </ul>
        </div>
    )
}

export default TransactionHistroy;
