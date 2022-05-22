import React from "react";
import { Context } from "../Context/NavContext";

const useNav = () => {
    const ctx = React.useContext(Context)
    return [ctx.state, ctx.setState]
}

export default useNav;