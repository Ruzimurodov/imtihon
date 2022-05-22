import Account from "../../Components/Account/Account";
import violetimg from "../../Assets/Images/violet.png"


const Violet = () => {
    return (
        <Account
			accImg={violetimg}
			userName='Violet Cobb'
			follower='104K subscribed'
			id={9}
			header='Violet Cobb videos'
		/>
    )
}

export default Violet;