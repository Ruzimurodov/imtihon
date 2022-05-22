import React from "react";
import { Context } from "../Context/Image";

const useImage = () => {
    const ctx = React.useContext(Context)
    return [ctx.state, ctx.setState]
}

export default useImage;