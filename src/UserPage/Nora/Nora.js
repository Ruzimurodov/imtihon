import Account from "../../Components/Account/Account"
import noraimg from "../../Assets/Images/nora.png"


const Nora = () => {
    return (
        <Account
				accImg={noraimg}
				userName='Nora Francis'
				follower='273K subscribed'
				id={7}
				header='Nora Francis videos'
			/>
    )
}

export default Nora;