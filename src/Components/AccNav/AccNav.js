import { NavLink, Route, Routes } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import UserHome from "../../UserPage/UserHome/UserHome"
import { Search } from '../../Assets/Images/Icons/Icons';
import './accNav.scss';

const AccNav = () => {

	const params = useParams()

	console.log(params);

	return (
		<ul className='menu-list'>
			<li className='menu-list__item'>
				<NavLink
					className='menu-list__link menu-list__link--active'
					to='/usermenu'>
					Home
				</NavLink>
				<Routes>
					<Route path='/usermenu' element={<UserHome />} />
				</Routes>
			</li>
			<li className='menu-list__item'>
				<NavLink
					className='menu-list__link'
					to='/uservideos'>
					Videos
				</NavLink>
				<Routes>
					<Route path='/uservideos' element={<UserHome />} />
				</Routes>
			</li>
			<li className='menu-list__item'>
				<NavLink
					className='menu-list__link'
					to='/userplaylist'>
					Playlists
				</NavLink>
				<Routes>
					<Route path='/userplaylists' element={<UserHome />} />
				</Routes>
			</li>
			<li className='menu-list__item'>
				<NavLink
					className='menu-list__link'
					to='/userchanels'>
					Channels
				</NavLink>
				<Routes>
					<Route path='/userchanels' element={<UserHome />} />
				</Routes>
			</li>
			<li className='menu-list__item'>
				<NavLink
					className='menu-list__link'
					to='/userdiscussion'>
					Discussion
				</NavLink>
				<Routes>
					<Route path='/userdiscussion' element={<UserHome />} />
				</Routes>
			</li>
			<li className='menu-list__item'>
				<NavLink
					className='menu-list__link'
					to='/userabout'>
					About
				</NavLink>
				<Routes>
					<Route path='/userabout' element={<UserHome />} />
				</Routes>
			</li>
			<li className='menu-list__item'>
				<button
					className='menu-list__link menu-list__link--btn'
					to='/usersearch'>
					<Search />
				</button>
			</li>
		</ul>
	);
};

export default AccNav;
