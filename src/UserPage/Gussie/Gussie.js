import Account from '../../Components/Account/Account';
import gussieimg from "../../Assets/Images/gussie.png"

const Gussie = () => {
	return (
		<>
			<Account
				accImg={gussieimg}
				userName='Gussie Singleton'
				follower='64K subscribed'
				id={5}
				header='Gussie Singleton videos'
			/>
		</>
	);
};

export default Gussie;
