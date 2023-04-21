import { createContext } from "react";

export const Context = createContext({})

const ContextProvider = ({ children }) => {

    return (
        <Context.Provider value={"s"}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider;