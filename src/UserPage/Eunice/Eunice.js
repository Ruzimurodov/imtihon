import Account from "../../Components/Account/Account";
import euniceimg from "../../Assets/Images/eunice.png"


const Eunice = () => {
    return (
        <>
            <Account accImg={euniceimg} userName="Eunice Cortez" follower="24K subscribed" id={3} header='Eunice Cortez videos' />
        </>
    )
}

export default Eunice;