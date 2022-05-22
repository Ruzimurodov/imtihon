import Account from '../../Components/Account/Account';
import floraimg from '../../Assets/Images/flora.png';

const Flora = () => {
	return (
		<>
			<Account
				accImg={floraimg}
				userName='Nora Francis'
				follower='232K subscribed'
				id={4}
				header='Nora Francis videos'
			/>
		</>
	);
};

export default Flora;
