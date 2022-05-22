import React, { useState } from "react";

const Context = React.createContext();

const LogoProvider = ({children}) => {

    const [state, setState] = useState(true)

    return (
        <Context.Provider value={{state, setState}}>
            {children}
        </Context.Provider>
    )
}

export {Context, LogoProvider};