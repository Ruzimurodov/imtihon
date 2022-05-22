import Account from '../../Components/Account/Account';
import philipimg from '../../Assets/Images/philip.png';

const Philip = () => {
	return (
		<Account
			accImg={philipimg}
			userName='Phillip Mullins'
			follower='99K subscribed'
			id={8}
			header='Phillip Mullins videos'
		/>
	);
};

export default Philip;
