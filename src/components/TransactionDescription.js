import React, {useState} from 'react';

export const TransactionDescription = () => {
    const [description, setdescription]=React.useState();
    const [transactionamount, settransactionamount]=React.useState();
    return (
        <div>
            <h3>Add New Transaction</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="description">Description of Daily Transaction</label>
                    <input type="text" id="description" placeholder="Daily Transaction"
                    value={description} 
                    onChange={(e)=> setdescription(e.target.value)}
                    
                    />

                </div>
                <div className="form-control">
                <label htmlFor="transactionamount">Transaction Amount</label>
                <input type="number" id="transactionamount" placeholder="Daily Transaction Amount"
                value={transactionamount} 
                onChange={(e)=> settransactionamount(e.target.value)} 
                />

                </div>
                <button className="btn">
                    Add Transaction
                </button>
            </form>
        </div>
    )
}
export default TransactionDescription;
