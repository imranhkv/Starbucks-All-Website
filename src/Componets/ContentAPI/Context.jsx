import { createContext, useState } from "react";


export const GlobalContext = createContext()

export const GlobalProvider = (props) => {
    const [reg, setReg] = useState(false);
    const [orders, setOrders] = useState([]);
    const [green, setGreen] = useState("")
   

    return (
        <GlobalContext.Provider value={{ register: reg, setReg, green, setGreen, orders, setOrders}} >
            {props.children}
        </GlobalContext.Provider>
    )
}
