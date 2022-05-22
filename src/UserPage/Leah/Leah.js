import Account from "../../Components/Account/Account";
import leahimg from "../../Assets/Images/leah.png"


const Leah = () => {
    return (
        <Account
				accImg={leahimg}
				userName='Leah Berry'
				follower='73K subscribed'
				id={6}
				header='Leah Berry videos'
			/>
    )
}

export default Leah;