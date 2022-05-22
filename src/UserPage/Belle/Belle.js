import React, { useState } from "react";
import Account from "../../Components/Account/Account";
import belleImg from "../../Assets/Images/belle.png"
import "./belle.scss"

const Belle = () => {

    return (
        <>
            <Account accImg={belleImg} userName="Belle Briggs" follower="245K subscribed" id={1} header='Belle Briggs videos' />
        </>

    )
}

export default Belle;