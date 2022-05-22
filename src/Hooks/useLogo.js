import React from "react";
import { Context } from "../Context/Logo";

const useLogo = () => {
    const ctx = React.useContext(Context)
    return [ctx.state, ctx.setState]
}

export default useLogo;