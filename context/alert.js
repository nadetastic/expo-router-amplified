import { createContext, useState } from "react";

export const AlertContext = createContext();

export function AlertProvider({ children }) {
    const [alert, setAlert] = useState({msg: 'none'});

    return (
        <AlertContext.Provider value={{ alert, setAlert }}>
            {children}
        </AlertContext.Provider>
    );
}