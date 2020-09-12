import React ,{createContext ,useReducer} from 'react';
import Appreducer from './Appreducer'


const Intialvalue={
    transactions: [
        {id: 1, description: "amount", transactionamount: 1000},
        {id: 2, description: "expense", transactionamount: -100},
        {id: 3, description:"amount", transactionamount: 2000},
        {id: 4, description:"expense", transactionamount: -200}
    ]
}
// Create Global Context

export const GlobalContext= createContext(Intialvalue);

// create provider to Global Context

export const GlobalProvider =(Childeren)=>{
    const[state,dispatch]=useReducer(Appreducer,Intialvalue)

    return(
        <GlobalContext.Provider value={
            {
            transactions: state.transactions

            }
        }>
            {Childeren}
        </GlobalContext.Provider>

        
    )

}