import React, { useState } from "react";
import userImage from "../Assets/Images/userimg.png"


const Context = React.createContext();

const LogoProvider = ({children}) => {

    const [state, setState] = useState({
        img: userImage,
        alt: "user image"
    })

    return (
        <Context.Provider value={{state, setState}}>
            {children}
        </Context.Provider>
    )
}

export {Context, LogoProvider};