import React from "react";
import { Context } from "../Context/Data";

const useData = (setterOnly) => {
    const ctx = React.useContext(Context);

    return setterOnly ? [ctx.setData] : [ctx.data, ctx.setData];
}

export default useData;