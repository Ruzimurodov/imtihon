import { NavLink } from 'react-router-dom';
import Gussie from "../../Assets/Images/gussie.png"
import Belle from "../../Assets/Images/belle.png"
import Emma from "../../Assets/Images/emma.png"
import Eunice from "../../Assets/Images/eunice.png"
import Leah from "../../Assets/Images/leah.png"
import Nora from "../../Assets/Images/nora.png"
import useLogo from "../../Hooks/useLogo"
import './subscription.scss';

const Subscription = () => {

	const [logo, setLogo] = useLogo()

	return (
		<div className='subscription'>
			<h2 className='subscription__title'>Subscriptions</h2>
			<ul className='subscription__list'>
				<li className='subscription__item'>
					<img src={Gussie} alt="user image" />
					<NavLink className='subscription__link' to='/gussiesingleton'>
						Gussie Singleton
					</NavLink>
				</li>
				<li className='subscription__item'>
				<img src={Nora} alt="user image" />
					<NavLink className='subscription__link' to='/norafrancis'>
						Nora Francis
					</NavLink>
				</li>
				<li className='subscription__item'>
				<img src={Belle} alt="user image" />
					<NavLink className='subscription__link' to='/bellebriggs'>
						Belle Briggs
					</NavLink>
				</li>
				<li className='subscription__item'>
				<img src={Eunice} alt="user image" />
					<NavLink className='subscription__link' to='/eunicecortez'>
						Eunice Cortez
					</NavLink>
				</li>
				<li className='subscription__item'>
				<img src={Emma} alt="user image" />
					<NavLink className='subscription__link' to='/emmahanson'>
						Emma Hanson
					</NavLink>
				</li>
				<li className='subscription__item'>
				<img src={Leah} alt="user image" />
					<NavLink className='subscription__link' to='/leahberry'>
						Leah Berry
					</NavLink>
				</li>
			</ul>
			<button onClick={() => {
				document.body.classList.toggle("darkmode-body")
				setLogo(prev => !prev)
			}} className='darkmode'>Dark Mode</button>
		</div>
	);
};

export default Subscription;
