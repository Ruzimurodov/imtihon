import Account from '../../Components/Account/Account';
import emmaImg from "../../Assets/Images/emma.png"

const Emma = () => {
	return (
		<>
			<Account
				accImg={emmaImg}
				userName='Emma Hanson'
				follower='200K subscribed'
				id={2}
				header='Emma Hanson videos'
			/>
		</>
	);
};

export default Emma;
